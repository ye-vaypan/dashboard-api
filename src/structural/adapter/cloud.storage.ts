import { StorageInterface } from './storage.interface';
import { CloudLogStorage } from './cloud.log.storage';

export class CloudStorage implements StorageInterface {
	private logger: CloudLogStorage;

	constructor() {
		this.logger = CloudLogStorage.getInstance();
	}

	getFileUrl(fileId: string): string {
		return this.logger.getFromStorage(fileId);
	}

	storeFile(file: string, path: string, newName?: string): string {
		let pathToFile = '';
		if (typeof newName === 'string') {
			pathToFile = path + '/' + newName + '.' + 'file_ext';
		} else {
			pathToFile = path + '/' + file + '.' + 'file_ext';
		}
		return this.logger.addToStorage(file, pathToFile);
	}

	listStoredFileIds(): string[] {
		return this.logger.listAll();
	}
}
