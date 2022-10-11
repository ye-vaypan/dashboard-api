import { NextFunction, Request, Response, Router } from 'express';

export interface UsersControllerInterface {
	router: Router;
	register: (req: Request, res: Response, next: NextFunction) => void;
	login: (req: Request, res: Response, next: NextFunction) => void;
}
