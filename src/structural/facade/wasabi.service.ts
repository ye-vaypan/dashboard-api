import { StorageServiceInterface } from './storage.service.interface';
import { WasabiStorageClient } from './wasabi/wasabi.storage.client';
import { WasabiUserManageClient } from './wasabi/wasabi.user.manage.client';
import { WasabiServiceUser } from './wasabi.service.user';
import { DbService } from './db.service';
import { User } from './user';

export class WasabiService implements StorageServiceInterface {
	private readonly wasabiStorageClient: WasabiStorageClient;
	private readonly wasabiUserManageClient: WasabiUserManageClient;
	private wasUser: WasabiServiceUser;
	private readonly dbConnection: DbService;
	private readonly options = {
		key: 'ADMINSLAFJHNASFJGVMKFVMJFNVJN',
		secret: 'ADMINSLAFJHNASFJGVMKFVMJFNVJN',
	};

	constructor(user: any = null) {
		this.wasabiStorageClient = new WasabiStorageClient(this.options);
		this.wasabiUserManageClient = new WasabiUserManageClient(this.options);
		this.dbConnection = DbService.getInstance();
		if (user !== null) {
			this.initWasUser(user);
		}
	}

	getFile(fileId: string): string {
		let client;
		if (this.wasUser !== undefined) {
			client = new WasabiStorageClient({
				key: this.wasUser.key,
				secret: this.wasUser.secret,
			});
		} else {
			client = this.wasabiStorageClient;
		}
		return client.get(fileId);
	}

	storeFile(file: string, path: string): string {
		let client;
		if (this.wasUser !== undefined) {
			client = new WasabiStorageClient({
				key: this.wasUser.key,
				secret: this.wasUser.secret,
			});
		} else {
			client = this.wasabiStorageClient;
		}
		return client.store(file, path);
	}

	private initWasUser(user: User): void {
		this.wasUser = this.dbConnection.findUser(user.email);
		if (this.wasUser === undefined) {
			const remoteUser = this.wasabiUserManageClient.getUser(user.email);
			let serviceUserKeys;
			if (remoteUser === undefined) {
				const remoteUser = this.wasabiUserManageClient.createUser(user.email);
				this.wasabiStorageClient.createHomeDir(remoteUser, user.email);
				this.wasabiStorageClient.updatePolicies(remoteUser, ['AllowHomeReadAccess', 'AllowHomeWriteAccess']);
				serviceUserKeys = this.wasabiUserManageClient.getAccessKeys(remoteUser);
			} else {
				serviceUserKeys = this.wasabiUserManageClient.getAccessKeys(remoteUser);
			}
			if (serviceUserKeys !== undefined) {
				this.wasUser = this.dbConnection.store(user, serviceUserKeys);
			}
		}
	}
}
