export class CloudLogStorage {
	private static instance: CloudLogStorage;
	private readonly _storage: Set<string>;
	private domain = 'https://my-cloud-subdomain.cloud.com/';

	private constructor() {
		this._storage = new Set();
	}

	public static getInstance(): CloudLogStorage {
		if (!this.instance) {
			this.instance = new CloudLogStorage();
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

	public addToStorage(file: string, path: string): string {
		if (this.isExists(path)) {
			throw new Error('File already exist');
		}

		this._storage.add(path);
		return path;
	}

	public listAll(): string[] {
		return Array.from(this._storage);
	}
}
