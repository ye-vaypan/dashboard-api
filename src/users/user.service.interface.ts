import { UserRegisterDto } from './dto/user-register.dto';
import { UserModel } from '../../prisma/generated/client';
import { UserLoginDto } from './dto/user-login.dto';
import { UserUpdateDto } from './dto/user.update.dto';
import { User } from './user.entity';

export interface UserServiceInterface {
	createUser: (dto: UserRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
	getUserInfo: (email: string) => Promise<UserModel | null>;
	updateUser: (body: UserUpdateDto, user: string) => Promise<UserModel | null>;
}
