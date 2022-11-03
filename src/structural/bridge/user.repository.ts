import { BaseRepository } from './base.repository';
import { StorageRepositoryInterface } from './storage.repository.interface';
import { User } from './user.entity';

export class UserRepository implements BaseRepository {
	private readonly repository: StorageRepositoryInterface;

	constructor(repository: StorageRepositoryInterface) {
		this.repository = repository;
	}

	getRepository(): StorageRepositoryInterface {
		return this.repository;
	}

	createRecord(user: User): User {
		return this.repository.store(user) as User;
	}

	getRecord(id: bigint): User {
		return this.repository.find(id) as User;
	}

	updateRecord(id: bigint, user: User): User {
		return this.repository.update(id, user) as User;
	}
}
