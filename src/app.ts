import express, { Express } from 'express';
import { Server } from 'http';
import { ExceptionFilterInterface } from './errors/exception.filter.interface';
import { LoggerInterface } from './logger/logger.interface';
import { inject, injectable } from 'inversify';
import { TYPES } from './types';
import 'reflect-metadata';
import { UsersControllerInterface } from './users/users.controller.interface';
import { json } from 'body-parser';
import { ConfigServiceInterface } from './config/config.service.interface';
import { PrismaService } from './database/prisma.service';

@injectable()
export class App {
	app: Express;
	port: number;
	server: Server;

	constructor(
		@inject(TYPES.LoggerInterface) private logger: LoggerInterface,
		@inject(TYPES.UserControllerInterface) private userController: UsersControllerInterface,
		@inject(TYPES.ExceptionFilterInterface) private readonly exceptionFilter: ExceptionFilterInterface,
		@inject(TYPES.ConfigServiceInterface) private readonly configService: ConfigServiceInterface,
		@inject(TYPES.PrismaService) private readonly prismaService: PrismaService,
	) {
		this.app = express();
		this.port = 8008;
		this.logger = logger;
		this.userController = userController;
		this.exceptionFilter = exceptionFilter;
	}

	useMiddleware(): void {
		this.app.use(json());
	}

	useRoutes(): void {
		this.app.use('/users', this.userController.router);
	}

	useExceptionFilters(): void {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	public async init(): Promise<void> {
		this.useMiddleware();
		this.useRoutes();
		this.useExceptionFilters();
		await this.prismaService.connect();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server is running on http://localhost:${this.port}`);
	}
}
