import { UserServiceInterface } from './user.service.interface';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ConfigServiceInterface } from '../config/config.service.interface';
import { UsersRepositoryInterface } from './users.repository.interface';
import { UserModel } from '../../prisma/generated/client';
import { UserLoginDto } from './dto/user-login.dto';
import { UserUpdateDto } from './dto/user.update.dto';

@injectable()
export class UsersService implements UserServiceInterface {
	constructor(
		@inject(TYPES.ConfigServiceInterface) private readonly configService: ConfigServiceInterface,
		@inject(TYPES.UsersRepositoryInterface) private readonly usersRepository: UsersRepositoryInterface,
	) {}
	async createUser({ email, name, password }: UserRegisterDto): Promise<UserModel | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('salt');
		await newUser.setPassword(password, Number(salt));

		const existUser = await this.usersRepository.find(email);
		if (existUser) {
			return null;
		}

		return this.usersRepository.create(newUser);
	}

	async updateUser(body: UserUpdateDto, user: string): Promise<UserModel | null> {
		const userInfo = await this.usersRepository.find(user);
		if (!userInfo) {
			return null;
		}
		const exists = new User(userInfo.email, userInfo.name, userInfo.password);

		const salt = this.configService.get('salt');
		if (body.name) exists.name = body.name;
		if (body.password) await exists.setPassword(body.password, Number(salt));

		return this.usersRepository.update(exists);
	}

	async validateUser({ email, password }: UserLoginDto): Promise<boolean> {
		const existUser = await this.usersRepository.find(email);
		if (!existUser) return false;

		const user = new User(existUser.email, existUser.name, existUser.password);

		return user.comparePassword(password);
	}

	async getUserInfo(email: string): Promise<UserModel | null> {
		const existUser = await this.usersRepository.find(email);
		if (existUser) {
			return existUser;
		}
		return null;
	}
}
