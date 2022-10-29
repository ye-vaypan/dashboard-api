import { LoggerService } from '../../logger/logger.service';

export class LocalLogStorage {
	private static instance: LocalLogStorage;
	private readonly _storage: Set<string>;
	private domain = 'https://my.domain.org/';

	private constructor(private readonly logger: LoggerService) {
		this._storage = new Set();
	}

	public static getInstance(): LocalLogStorage {
		if (!this.instance) {
			this.instance = new LocalLogStorage(new LoggerService());
		}
		return this.instance;
	}

	public getFromStorage(key: string): string {
		if (this.isExists(key)) {
			return `${this.domain}${key}`;
		}
		throw new Error('File does not exist');
	}

	public isExists(key: string): boolean {
		return this._storage.has(key);
	}

	public addToStorage(file: string, path: string, overwrite = false): string {
		if (this.isExists(path)) {
			if (overwrite) {
				this._storage.delete(path);
			} else throw new Error('File already exist');
		}

		this._storage.add(path);
		return path;
	}

	public listAll(): string[] {
		return Array.from(this._storage);
	}
}
