import { UserConnectionEntity } from './user.connection.entity';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import { PrismaService } from '../../database/prisma.service';
import { UserConnections } from '../../../prisma/generated/client';

@injectable()
export class UserConnectionRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create({ browser, os, device, country, ip }: UserConnectionEntity): Promise<UserConnections> {
		return this.prismaService.client.userConnections.create({
			data: {
				browser,
				os,
				device,
				country,
				ip,
			},
		});
	}

	async find(id: number): Promise<UserConnections | null> {
		return this.prismaService.client.userConnections.findFirst({
			where: {
				id,
			},
		});
	}

	async getAll(): Promise<UserConnections[] | null> {
		return this.prismaService.client.userConnections.findMany();
	}

	async getCount(): Promise<number> {
		return this.prismaService.client.userConnections.count();
	}

	async findByIp(ip: string): Promise<UserConnections | null> {
		return this.prismaService.client.userConnections.findFirst({
			where: {
				ip,
			},
		});
	}
}
