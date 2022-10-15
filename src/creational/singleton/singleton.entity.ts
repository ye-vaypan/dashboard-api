import { LoggerService } from '../../logger/logger.service';

export class SingletonEntity {
	private static instance: SingletonEntity;
	private _log: string[];

	private constructor(private readonly logger: LoggerService) {
		this.logger.log('Singletone Constructor is called');
		this._log = [];
	}

	public static getInstance(): SingletonEntity {
		if (!this.instance) {
			this.instance = new SingletonEntity(new LoggerService());
		}
		return this.instance;
	}

	get log(): string[] {
		return this._log;
	}

	public addLog(value: string): void {
		this._log.push(value);
	}
}
