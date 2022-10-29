import { StorageInterface } from './storage.interface';
import { LocalLogStorage } from './local.log.storage';

export class LocalStorage implements StorageInterface {
	private logger: LocalLogStorage;

	constructor() {
		this.logger = LocalLogStorage.getInstance();
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
		return this.logger.addToStorage(file, pathToFile, true);
	}

	listStoredFileIds(): string[] {
		return this.logger.listAll();
	}
}
