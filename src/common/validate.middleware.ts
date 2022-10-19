import { MiddlewareInterface } from './middleware.interface';
import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToClass, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class ValidateMiddleware implements MiddlewareInterface {
	constructor(private classToValidate: ClassConstructor<object>) {}
	execute({ body }: Request, res: Response, next: NextFunction): void {
		const instance = plainToInstance(this.classToValidate, body);
		validate(instance).then((errors) => {
			if (errors.length > 0) {
				return res.status(422).send(errors);
			}

			next();
		});
	}
}
