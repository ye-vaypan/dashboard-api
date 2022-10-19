import { UserRegisterDto } from './dto/user-register.dto';
import { UserModel } from '@prisma/client';
import { UserLoginDto } from './dto/user-login.dto';

export interface UserServiceInterface {
	createUser: (dto: UserRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
	getUserInfo: (email: string) => Promise<UserModel | null>;
}
