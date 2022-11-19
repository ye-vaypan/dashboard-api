import { Request, Response, NextFunction } from 'express';
import { MiddlewareInterface } from './middleware.interface';

export class ValidateMiddleware implements MiddlewareInterface {
	private nextMiddleware: MiddlewareInterface;

	setNext(nextMiddleware: MiddlewareInterface): MiddlewareInterface {
		this.nextMiddleware = nextMiddleware;
		return nextMiddleware;
	}

	execute(req: Request): Request | null {
		const errors = this.validate(req.body);
		if (errors.length > 0) {
			return null;
		}
		if (this.nextMiddleware) return this.nextMiddleware.execute(req);

		return req;
	}

	private validate(body: any[]): string[] {
		return [];
	}
}
