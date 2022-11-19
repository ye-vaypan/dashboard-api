import { Request } from 'express';

export interface MiddlewareInterface {
	execute: (req: Request) => Request | null;
	setNext: (middlewareInterface: MiddlewareInterface) => MiddlewareInterface;
}
