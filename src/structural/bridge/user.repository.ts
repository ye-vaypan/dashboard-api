import { BaseRepository } from './base.repository';
import { StorageRepositoryInterface } from './storage.repository.interface';

export class UserRepository extends BaseRepository {
	constructor(repository: StorageRepositoryInterface) {
		super();
		this.repository = repository;
	}

	getRepository(): StorageRepositoryInterface {
		return this.repository;
	}

	save(): void {
		this.repository.store();
	}
}
