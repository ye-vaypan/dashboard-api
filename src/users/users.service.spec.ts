import 'reflect-metadata';
import { Container } from 'inversify';
import { ConfigServiceInterface } from '../config/config.service.interface';
import { UsersRepositoryInterface } from './users.repository.interface';
import { UserServiceInterface } from './user.service.interface';
import { TYPES } from '../types';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserModel } from '../../prisma/generated/client';

const ConfigServiceMock: ConfigServiceInterface = {
	get: jest.fn(),
};

const UsersRepositoryMock: UsersRepositoryInterface = {
	create: jest.fn(),
	find: jest.fn(),
};

const container = new Container();
let configService: ConfigServiceInterface;
let usersRepository: UsersRepositoryInterface;
let usersService: UserServiceInterface;

beforeAll(() => {
	container.bind<UserServiceInterface>(TYPES.UserServiceInterface).to(UsersService);
	container.bind<ConfigServiceInterface>(TYPES.ConfigServiceInterface).toConstantValue(ConfigServiceMock);
	container.bind<UsersRepositoryInterface>(TYPES.UsersRepositoryInterface).toConstantValue(UsersRepositoryMock);

	configService = container.get<ConfigServiceInterface>(TYPES.ConfigServiceInterface);
	usersRepository = container.get<UsersRepositoryInterface>(TYPES.UsersRepositoryInterface);
	usersService = container.get<UserServiceInterface>(TYPES.UserServiceInterface);
});

let createdUser: UserModel | null;

describe('User Service', () => {
	it('should create user', async () => {
		configService.get = jest.fn().mockReturnValueOnce('1');
		usersRepository.create = jest.fn().mockImplementationOnce(
			(user: User): UserModel => ({
				name: user.name,
				email: user.email,
				password: user.password,
				id: 1,
			}),
		);
		createdUser = await usersService.createUser({
			name: 'test@test.com',
			email: 'test@test.com',
			password: 'password',
		});

		expect(createdUser?.id).toEqual(1);
		expect(createdUser?.password).not.toEqual('password');
	});

	it('Validates user - success', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(createdUser);
		const res = await usersService.validateUser({
			email: 'test@test.com',
			password: 'password',
		});

		expect(res).toBeTruthy();
	});

	it('Validates user - wrong password', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(createdUser);
		const res = await usersService.validateUser({
			email: 'test@test.com',
			password: '123',
		});

		expect(res).toBeFalsy();
	});

	it('Validates user - user not found', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(null);
		const res = await usersService.validateUser({
			email: 'test@test.com',
			password: '123',
		});
		expect(res).toBeFalsy();
	});
});
