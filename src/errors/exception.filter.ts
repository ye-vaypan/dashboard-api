import { NextFunction, Request, Response } from 'express';
import { ExceptionFilterInterface } from './exception.filter.interface';
import { HttpError } from './http-error';
import { inject, injectable } from 'inversify';
import { LoggerInterface } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';

@injectable()
export class ExceptionFilter implements ExceptionFilterInterface {
	constructor(@inject(TYPES.LoggerInterface) private logger: LoggerInterface) {}

	catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction): void {
		if (err instanceof HttpError) {
			this.logger.error(`[${err.context}] Code:${err.statusCode} : ${err.message}`);
			res.status(err.statusCode).json({
				status: 'ERROR',
				message: 'Error is occurred.',
				content: {
					title: 'Error is occurred...!',
					code: err.statusCode,
					message: err.message,
				},
			});
		} else {
			this.logger.error(`${err.message}`);
			res.status(500).json({
				status: 'ERROR',
				message: 'Error is occurred.',
				content: {
					title: 'Something went wrong...!',
					code: 500,
				},
			});
		}
	}
}
