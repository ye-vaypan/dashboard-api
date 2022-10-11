import { ConfigServiceInterface } from './config.service.interface';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { LoggerInterface } from '../logger/logger.interface';

@injectable()
export class ConfigService implements ConfigServiceInterface {
	private readonly config: DotenvParseOutput;
	constructor(@inject(TYPES.LoggerInterface) private logger: LoggerInterface) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.logger.error(result.error);
		} else {
			this.logger.log('[ConfigService] Config from .env loaded successful)');
			this.config = result.parsed as DotenvParseOutput;
		}
	}
	get(key: string): string {
		return this.config[key];
	}
}
