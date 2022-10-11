import { User } from './user.entity';
import { UserModel } from '@prisma/client';

export interface UsersRepositoryInterface {
	create: (user: User) => Promise<UserModel>;
	find: (email: string) => Promise<UserModel | null>;
}
