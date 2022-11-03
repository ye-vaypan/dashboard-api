import { BaseRepository } from './base.repository';
import { StorageRepositoryInterface } from './storage.repository.interface';
import { User } from './user.entity';
import { UserModel } from '@prisma/client';

export class UserRepository implements BaseRepository {
	private readonly repository: StorageRepositoryInterface;

	constructor(repository: StorageRepositoryInterface) {
		this.repository = repository;
	}

	getRepository(): StorageRepositoryInterface {
		return this.repository;
	}

	async createRecord(user: User): Promise<UserModel | null> {
		const existUser = await this.repository.find(user.email);
		if (existUser) {
			return null;
		}
		return this.repository.store(user);
	}

	async getRecord(email: string): Promise<UserModel | null> {
		return this.repository.find(email);
	}

	// async updateRecord(email: string, user: User): Promise<UserModel> {
	// 	return this.repository.update(email, user);
	// }
}
