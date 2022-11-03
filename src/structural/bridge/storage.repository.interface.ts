import { BaseEntity } from './base.entity';

export interface StorageRepositoryInterface {
	store(entity: BaseEntity): BaseEntity;
	find(id: bigint): BaseEntity;
	update(id: bigint, entity: BaseEntity): BaseEntity;
}
