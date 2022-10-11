import { PrismaClient, UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { LoggerInterface } from '../logger/logger.interface';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.LoggerInterface) private logger: LoggerInterface) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			this.logger.log('[PrismaService] Connected to DB');
			await this.client.$connect();
		} catch (e) {
			if (e instanceof Error) {
				this.logger.error('[PrismaService] Can not connect to DB');
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
	}
}
