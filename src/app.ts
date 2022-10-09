import express, {Express} from "express";
import {Server} from 'http';
import {UsersController} from "./users/users.controller";
import {ExceptionFilterInterface} from "./errors/exception.filter.interface";
import {LoggerInterface} from "./logger/logger.interface";

export class App {
    app: Express;
    port: number;
    server: Server;
    logger: LoggerInterface;
    userController: UsersController;
    exceptionFilter: ExceptionFilterInterface;

    constructor(
        logger: LoggerInterface,
        userController: UsersController,
        exceptionFilter: ExceptionFilterInterface
    ) {
        this.app = express();
        this.port = 8008;
        this.logger = logger;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;

    }

    useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
    }

    public async init(){
        this.useRoutes();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server is running on http://localhost:${this.port}`)
    }
}