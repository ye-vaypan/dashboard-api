import { StorageRepositoryInterface } from './storage.repository.interface';
import { UserModel } from '@prisma/client';
import { User } from './user.entity';
import stFile from '../../../storageFile.json';
import fs from 'fs';

export class FileStorage implements StorageRepositoryInterface {
	public storageFile: any;
	// private instance: FileStorage;

	constructor() {
		if (stFile.data !== undefined && stFile.lastId !== undefined) {
			this.storageFile = stFile;
		} else {
			this.storageFile = {
				lastId: 0,
				data: {},
			};
		}
	}

	async find(email: string): Promise<UserModel | null> {
		if (this.storageFile !== undefined && this.storageFile.data !== undefined) {
			return this.storageFile.data[email] ?? null;
		}
		return null;
	}

	async store(entity: User): Promise<UserModel> {
		let user;
		if (this.storageFile !== undefined && this.storageFile.data !== undefined) {
			user = this.storageFile.data[entity.email] ?? null;
			if (user === null) {
				this.storageFile.lastId += 1;
				user = {
					id: this.storageFile.lastId,
					email: entity.email,
					password: entity.password,
					name: entity.name,
				};
				this.storageFile.data[entity.email] = user;
				const json = JSON.stringify(this.storageFile);
				fs.writeFile('storageFile.json', json, 'utf8', function () {
					console.log('write data to file');
				});
			}
		}

		return user as UserModel;
	}

	async update(email: string, entity: User): Promise<UserModel> {
		return {
			id: 1,
			email: '',
			password: '',
			name: '',
		};
	}
}
