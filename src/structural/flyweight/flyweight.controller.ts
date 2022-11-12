import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';

export class FlyweightController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/store-logo',
				method: 'post',
				func: this.saveLogo,
			},
			{
				path: '/get-logo',
				method: 'get',
				func: this.getLogo,
			},
		]);
	}

	async getLogo({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const user = body.user ?? null;
		const fileService = new WasabiService(user);
		const file = fileService.getFile(body.fileId);
		this.ok(res, {
			status: 'OK',
			message: 'Logo returned',
			content: file,
		});
	}
	async saveLogo({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const user = body.user ?? null;
		const fileService = new WasabiService(user);
		const file = fileService.storeFile(body.file, 'some/path/to/save');

		this.ok(res, {
			status: 'OK',
			message: 'Logo saved',
			content: {
				fileId: file,
			},
		});
	}
}
