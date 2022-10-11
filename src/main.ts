import { App } from './app';
import { LoggerService } from './logger/logger.service';
import { ExceptionFilter } from './errors/exception.filter';
import { Container, ContainerModule, interfaces } from 'inversify';
import { LoggerInterface } from './logger/logger.interface';
import { TYPES } from './types';
import { ExceptionFilterInterface } from './errors/exception.filter.interface';
import { UsersController } from './users/users.controller';
import { UsersControllerInterface } from './users/users.controller.interface';
import { UsersService } from './users/users.service';
import { UserServiceInterface } from './users/user.service.interface';
import { ConfigServiceInterface } from './config/config.service.interface';
import { ConfigService } from './config/config.service';
import { PrismaService } from './database/prisma.service';
import { UsersRepositoryInterface } from './users/users.repository.interface';
import { UsersRepository } from './users/users.repository';

export interface BootstrapReturnInterface {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<LoggerInterface>(TYPES.LoggerInterface).to(LoggerService).inSingletonScope();
	bind<ExceptionFilterInterface>(TYPES.ExceptionFilterInterface).to(ExceptionFilter).inSingletonScope();
	bind<UsersControllerInterface>(TYPES.UserControllerInterface).to(UsersController).inSingletonScope();
	bind<UserServiceInterface>(TYPES.UserServiceInterface).to(UsersService).inSingletonScope();
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<ConfigServiceInterface>(TYPES.ConfigServiceInterface).to(ConfigService).inSingletonScope();
	bind<UsersRepositoryInterface>(TYPES.UsersRepositoryInterface).to(UsersRepository);
	bind<App>(TYPES.Application).to(App).inSingletonScope();
});

function bootstrap(): BootstrapReturnInterface {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { appContainer, app };
}

export const { app, appContainer } = bootstrap();
