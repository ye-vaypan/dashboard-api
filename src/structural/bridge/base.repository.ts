import { StorageRepositoryInterface } from './storage.repository.interface';
import { BaseEntity } from './base.entity';

export interface BaseRepository {
	getRepository(): StorageRepositoryInterface;
	createRecord(entity: BaseEntity): BaseEntity;
	getRecord(id: bigint): BaseEntity;
	updateRecord(id: bigint, entity: BaseEntity): BaseEntity;
}
