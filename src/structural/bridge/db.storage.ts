import { StorageRepositoryInterface } from './storage.repository.interface';
import { PrismaService } from '../../database/prisma.service';
import { User } from './user.entity';
import { UserModel } from '@prisma/client';
import { LoggerService } from '../../logger/logger.service';

export class DbStorage implements StorageRepositoryInterface {
	private prismaService: PrismaService;
	constructor() {
		this.prismaService = new PrismaService(new LoggerService());
	}

	async find(email: string): Promise<UserModel | null> {
		return this.prismaService.client.userModel.findFirst({
			where: {
				email,
			},
		});
	}

	async store({ email, name, password }: User): Promise<UserModel> {
		return this.prismaService.client.userModel.create({
			data: {
				email,
				name,
				password,
			},
		});
	}

	async update(email: string, { name, password }: User): Promise<UserModel> {
		return this.prismaService.client.userModel.update({
			data: {
				name,
				password,
			},
			where: {
				email,
			},
		});
	}
}
