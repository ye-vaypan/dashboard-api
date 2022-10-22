import { LoggerService } from '../../logger/logger.service';
import { ClonableInterface } from './clonable.interface';

export class WheelStorage {
	private static instance: WheelStorage;
	private readonly _storage: ClonableInterface[];

	private constructor(private readonly logger: LoggerService) {
		this.logger.log('Singletone Constructor is called');
		this._storage = [];
	}

	public static getInstance(): WheelStorage {
		if (!this.instance) {
			this.instance = new WheelStorage(new LoggerService());
		}
		return this.instance;
	}

	get storage(): ClonableInterface[] {
		return this._storage;
	}

	public addToStorage(value: ClonableInterface): void {
		this._storage.push(value);
	}
}
