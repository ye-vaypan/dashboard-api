import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import { ConfigServiceInterface } from '../../config/config.service.interface';
import { UserConnectionEntity } from './user.connection.entity';
import { UserConnections } from '../../../prisma/generated/client';
import { UserConnectionRepository } from './user.connection.repository';

@injectable()
export class UserConnectionService {
	constructor(
		@inject(TYPES.ConfigServiceInterface) private readonly configService: ConfigServiceInterface,
		@inject(TYPES.UserConnectionRepository) private readonly userConnectionRepository: UserConnectionRepository,
	) {}

	async createUserConnection(
		browser: string,
		os: string,
		device: string,
		country: string,
		ip: string,
	): Promise<UserConnections | null> {
		const newConnection = new UserConnectionEntity(browser, os, device, country, ip);
		const existUser = await this.userConnectionRepository.findByIp(ip);
		if (existUser) {
			return null;
		}

		return this.userConnectionRepository.create(newConnection);
	}
}
