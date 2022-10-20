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
import { SingletonController } from './creational/singleton/singletone.controller';
import swaggerUi from 'swagger-ui-express';
import { FactoryController } from './creational/factory/factory.controller';
import { AuthMiddleware } from './common/auth.middleware';
import { AbstractFactoryController } from './creational/abstract-factory/abstract.factory.controller';

@injectable()
export class App {
	app: Express;
	port: number;
	server: Server;
	options: object;

	constructor(
		@inject(TYPES.LoggerInterface) private logger: LoggerInterface,
		@inject(TYPES.UserControllerInterface) private userController: UsersControllerInterface,
		@inject(TYPES.ExceptionFilterInterface) private readonly exceptionFilter: ExceptionFilterInterface,
		@inject(TYPES.ConfigServiceInterface) private readonly configService: ConfigServiceInterface,
		@inject(TYPES.PrismaService) private readonly prismaService: PrismaService,

		@inject(TYPES.SingletonController) private singletonController: SingletonController,
		@inject(TYPES.FactoryController) private factoryController: FactoryController,
		@inject(TYPES.AbstractFactoryController) private abstractFactoryController: AbstractFactoryController,
	) {
		this.app = express();
		this.port = 8008;
		this.logger = logger;
		this.userController = userController;
		this.singletonController = singletonController;
		this.factoryController = factoryController;
		this.abstractFactoryController = abstractFactoryController;
		this.exceptionFilter = exceptionFilter;
		this.options = {
			swaggerOptions: {
				url: '/swagger.json',
			},
		};
	}

	useMiddleware(): void {
		this.app.use(json());
		const authMiddleware = new AuthMiddleware(this.configService.get('APP_SECRET'));
		this.app.use(authMiddleware.execute.bind(authMiddleware));
	}

	useRoutes(): void {
		this.app.use('/users', this.userController.router);
		this.app.use('/singleton', this.singletonController.router);
		this.app.use('/factory', this.factoryController.router);
		this.app.use('/abstract-factory', this.abstractFactoryController.router);
		this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup({}, this.options));
		this.app.use(express.static('public'));
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
