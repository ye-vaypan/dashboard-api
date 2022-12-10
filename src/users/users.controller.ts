import { BaseController } from '../common/base.controller';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors/http-error';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { LoggerInterface } from '../logger/logger.interface';
import 'reflect-metadata';
import { UsersControllerInterface } from './users.controller.interface';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserServiceInterface } from './user.service.interface';
import { ValidateMiddleware } from '../common/validate.middleware';
import { sign } from 'jsonwebtoken';
import { ConfigServiceInterface } from '../config/config.service.interface';
import { AuthGuard } from '../common/auth.guard';
import { UserUpdateDto } from './dto/user.update.dto';

@injectable()
export class UsersController extends BaseController implements UsersControllerInterface {
	constructor(
		@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface,
		@inject(TYPES.UserServiceInterface) private userService: UserServiceInterface,
		@inject(TYPES.ConfigServiceInterface) private configService: ConfigServiceInterface,
	) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleware(UserRegisterDto)],
			},
			{
				path: '/login',
				method: 'post',
				func: this.login,
				middlewares: [new ValidateMiddleware(UserLoginDto)],
			},
			{
				path: '/info',
				method: 'get',
				func: this.info,
				middlewares: [new AuthGuard()],
			},
			{
				path: '/update',
				method: 'put',
				func: this.update,
				middlewares: [new AuthGuard(), new ValidateMiddleware(UserUpdateDto)],
			},
		]);
	}

	async register({ body }: Request<{}, {}, UserRegisterDto>, res: Response, next: NextFunction): Promise<void> {
		const newUser = await this.userService.createUser(body);

		if (!newUser) {
			return next(new HttpError(422, 'User already exists', 'User registration'));
		}

		this.created(res, {
			status: 'OK',
			message: 'User is registered.',
			content: {
				title: 'Welcome to Dashboard!',
				user: {
					email: newUser.email,
					name: newUser.name,
					id: newUser.id,
				},
			},
		});
	}

	async login({ body }: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): Promise<void> {
		const result = await this.userService.validateUser(body);
		if (!result) {
			this.loggerService.error('Sign in error!', body);
			return next(new HttpError(401, 'Password is incorrect!', 'users/login'));
		}

		const jwt = await this.signJWT(body.email, this.configService.get('APP_SECRET'));

		this.ok(res, {
			status: 'OK',
			message: 'User is logged in.',
			content: {
				title: `Welcome to Dashboard!`,
			},
			token: jwt,
		});
	}

	private signJWT(email: string, secret: string): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			sign(
				{
					email,
					iat: Math.floor(Date.now() / 1000),
				},
				secret,
				{
					algorithm: 'HS256',
				},
				(err, token) => {
					if (err) {
						reject(err);
					}
					resolve(token as string);
				},
			);
		});
	}

	async info(req: Request, res: Response, next: NextFunction): Promise<void> {
		const user = await this.userService.getUserInfo(req.user);
		if (!user) {
			res.status(401).send({
				status: 'ERROR',
				message: 'Authentication error.',
			});
		} else {
			this.ok(res, {
				status: 'OK',
				message: 'User info.',
				content: {
					user: {
						id: user.id,
						email: user.email,
						name: user.name,
					},
				},
			});
		}
	}

	async update(req: Request<{}, {}, UserRegisterDto>, res: Response, next: NextFunction): Promise<void> {
		const userInfo = await this.userService.updateUser(req.body, req.user);

		if (!userInfo) {
			res.status(401).send({
				status: 'ERROR',
				message: 'Authentication error.',
			});
		} else {
			this.ok(res, {
				status: 'OK',
				message: 'User is updated.',
				content: {
					user: {
						email: userInfo.email,
						name: userInfo.name,
						id: userInfo.id,
					},
				},
			});
		}
	}
}
