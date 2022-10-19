import { MiddlewareInterface } from './middleware.interface';
import { NextFunction, Response, Request } from 'express';
import { verify } from 'jsonwebtoken';

export class AuthMiddleware implements MiddlewareInterface {
	constructor(private secret: string) {}
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			verify(token, this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload) {
					// console.log(payload);
					if (typeof payload === 'string') {
						req.user = payload;
					} else {
						req.user = payload.email;
					}
					next();
				}
			});
		} else {
			next();
		}
	}
}
