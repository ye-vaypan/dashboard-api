import { UserServiceInterface } from './user.service.interface';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ConfigServiceInterface } from '../config/config.service.interface';

@injectable()
export class UsersService implements UserServiceInterface {
	constructor(@inject(TYPES.ConfigServiceInterface) private readonly configService: ConfigServiceInterface) {}
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('salt');
		await newUser.setPassword(password, Number(salt));
		return null;
	}

	async validateUser(dto: UserRegisterDto): Promise<boolean> {
		return true;
	}
}
