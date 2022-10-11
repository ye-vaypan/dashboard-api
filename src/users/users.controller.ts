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
import {ValidateMiddleware} from "../common/validate.middleware";

@injectable()
export class UsersController extends BaseController implements UsersControllerInterface {
	constructor(
		@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface,
		@inject(TYPES.UserServiceInterface) private userService: UserServiceInterface,
	) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleware(UserRegisterDto)],
			},
			{ path: '/login', method: 'post', func: this.login },
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
				},
			},
		});
	}

	login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		this.loggerService.log(req.body);
		next(new HttpError(401, 'Sign in error!', 'users/login'));
		// this.ok(res, {
		//     "status": "OK",
		//     "message": "User signed in.",
		//     "content": {
		//         "title": "Welcome to Dashboard!"
		//     }
		// });
	}
}
