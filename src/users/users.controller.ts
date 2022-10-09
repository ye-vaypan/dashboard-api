import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {NextFunction, Request, Response} from "express";
import {HttpError} from "../errors/http-error";

export class UsersController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            {path: '/register', method: "post", func: this.register},
            {path: '/login', method: "post", func: this.login}
        ]);
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.created(res, {
            "status": "OK",
            "message": "User is registered.",
            "content": {
                "title": "Welcome to Dashboard!"
            }
        });
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HttpError(401, 'Sign in error!', 'users/login'))
        // this.ok(res, {
        //     "status": "OK",
        //     "message": "User signed in.",
        //     "content": {
        //         "title": "Welcome to Dashboard!"
        //     }
        // });
    }
}