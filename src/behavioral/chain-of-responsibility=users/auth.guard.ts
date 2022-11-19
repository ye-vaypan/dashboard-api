import { MiddlewareInterface } from './middleware.interface';
import { NextFunction, Response, Request } from 'express';

export class AuthGuard implements MiddlewareInterface {
	private nextMiddleware: MiddlewareInterface;

	setNext(nextMiddleware: MiddlewareInterface): MiddlewareInterface {
		this.nextMiddleware = nextMiddleware;
		return nextMiddleware;
	}

	execute(req: Request): Request | null {
		if (req.user) {
			if (this.nextMiddleware) return this.nextMiddleware.execute(req);
			return req;
		}
		return null;
	}
}
