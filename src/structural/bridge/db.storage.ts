import { StorageRepositoryInterface } from './storage.repository.interface';
import { BaseEntity } from './base.entity';

export class DbStorage implements StorageRepositoryInterface {
	find(id: bigint): BaseEntity {
		return undefined;
	}

	store(entity: BaseEntity): BaseEntity {
		return undefined;
	}

	update(id: bigint, entity: BaseEntity): BaseEntity {
		return undefined;
	}
}
