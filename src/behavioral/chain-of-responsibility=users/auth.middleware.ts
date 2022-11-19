import { MiddlewareInterface } from './middleware.interface';
import { NextFunction, Response, Request } from 'express';

export class AuthMiddleware implements MiddlewareInterface {

	private nextMiddleware: MiddlewareInterface;

	setNext(nextMiddleware: MiddlewareInterface): MiddlewareInterface {
		this.nextMiddleware = nextMiddleware;
		return nextMiddleware;
	}

	execute(req: Request): Request | null {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			if (token !== 'querty') {
				req.user = 'admin';
			}
			if (this.nextMiddleware) return this.nextMiddleware.execute(req);
			return req;
		}
		return null;
	}
}
