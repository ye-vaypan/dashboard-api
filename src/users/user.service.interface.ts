import { UserRegisterDto } from './dto/user-register.dto';
import { UserModel } from '@prisma/client';

export interface UserServiceInterface {
	createUser: (dto: UserRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UserRegisterDto) => Promise<boolean>;
}
