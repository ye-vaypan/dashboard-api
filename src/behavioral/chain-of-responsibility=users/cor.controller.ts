import { BaseController } from '../../common/base.controller';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import 'reflect-metadata';
import { ValidateMiddleware } from './validate.middleware';
import { AuthGuard } from './auth.guard';
import { AuthMiddleware } from './auth.middleware';

@injectable()
export class CorController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/update',
				method: 'put',
				func: this.update,
			},
		]);
	}

	async update(req: Request, res: Response, next: NextFunction): Promise<void> {
		const authRequest = new AuthMiddleware();
		const authGuard = new AuthGuard();
		const validate = new ValidateMiddleware();
		validate.setNext(authRequest).setNext(authGuard);
		const processedRequest = validate.execute(req);

		if (processedRequest) {
			this.ok(res, {
				status: 'OK',
				message: 'Request is processed.',
				content: {},
			});
		} else {
			this.send(res, 500, {
				status: 'Error',
				message: 'Something went wrong.',
				content: {},
			});
		}
	}
}
