import {LoggerService} from "../logger/logger.service";
import {Response, Router} from "express";
import {RouteInterface} from "./route.interface";

export abstract class BaseController {

    private readonly _router: Router;

    constructor(private logger: LoggerService) {
        this._router = Router();
    }

    get router(): Router {
        return this._router;
    }

    protected bindRoutes(routes: RouteInterface[]) {
        for (const route of routes){
            this.logger.log(`[${route.method}] ${route.path}`);
            const handler = route.func.bind(this);
            this.router[route.method](route.path, handler);
        }
    }

    public send<T>(res: Response, code: number, message: T){
        res.type('application/json');
        return res.status(code).json(message);
    }

    public ok<T>(res: Response, message: T){
        this.send<T>(res, 200, message);
    }

    public created<T>(res: Response, message: T){
        this.send<T>(res, 201, message);
    }
}