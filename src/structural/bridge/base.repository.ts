import { StorageRepositoryInterface } from './storage.repository.interface';
import { User } from './user.entity';
import { UserModel } from '../../../prisma/generated/client';

export interface BaseRepository {
	getRepository(): StorageRepositoryInterface;
	createRecord(entity: User): Promise<UserModel | null>;
	getRecord(email: string): Promise<UserModel | null>;
	// updateRecord(email: string, entity: User): Promise<UserModel>;
}
