import { UserModel } from '../../../prisma/generated/client';
import { User } from './user.entity';

export interface StorageRepositoryInterface {
	store(entity: User): Promise<UserModel>;
	find(email: string): Promise<UserModel | null>;
	update(email: string, entity: User): Promise<UserModel>;
}
