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
import { SingletonController } from './creational/singleton/singletone.controller';
import { FactoryController } from './creational/factory/factory.controller';
import { AbstractFactoryController } from './creational/abstract-factory/abstract.factory.controller';
import { BuilderController } from './creational/builder/builder.controller';
import { PrototypeController } from './creational/prototype/prototype.controller';
import { AdapterController } from './structural/adapter/adapter.controller';
import { BridgeController } from './structural/bridge/bridge.controller';
import { CompositeController } from './structural/composite/composite.controller';
import { FacadeController } from './structural/facade/facade.controller';
import { DecoratorController } from './structural/decorator/decorator.controller';
import { StrategyController } from './behavioral/strategy/strategy.controller';
import { FlyweightController } from './structural/flyweight/flyweight.controller';
import { UserConnectionRepository } from './structural/flyweight/user.connection.repository';

export interface BootstrapReturnInterface {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<LoggerInterface>(TYPES.LoggerInterface).to(LoggerService).inSingletonScope();
	bind<ExceptionFilterInterface>(TYPES.ExceptionFilterInterface).to(ExceptionFilter).inSingletonScope();
	bind<UsersControllerInterface>(TYPES.UserControllerInterface).to(UsersController);
	bind<UserServiceInterface>(TYPES.UserServiceInterface).to(UsersService);
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<ConfigServiceInterface>(TYPES.ConfigServiceInterface).to(ConfigService).inSingletonScope();
	bind<UsersRepositoryInterface>(TYPES.UsersRepositoryInterface).to(UsersRepository);
	/* Creational patterns */
	bind<SingletonController>(TYPES.SingletonController).to(SingletonController);
	bind<FactoryController>(TYPES.FactoryController).to(FactoryController);
	bind<AbstractFactoryController>(TYPES.AbstractFactoryController).to(AbstractFactoryController);
	bind<BuilderController>(TYPES.BuilderController).to(BuilderController);
	bind<PrototypeController>(TYPES.PrototypeController).to(PrototypeController);
	/* Structural patterns */
	bind<AdapterController>(TYPES.AdapterController).to(AdapterController);
	bind<BridgeController>(TYPES.BridgeController).to(BridgeController);
	bind<CompositeController>(TYPES.CompositeController).to(CompositeController);
	bind<FacadeController>(TYPES.FacadeController).to(FacadeController);
	bind<DecoratorController>(TYPES.DecoratorController).to(DecoratorController);
	bind<FlyweightController>(TYPES.FlyweightController).to(FlyweightController);
	bind<UserConnectionRepository>(TYPES.UserConnectionRepository).to(UserConnectionRepository);
	/* Behavioral patterns */
	bind<StrategyController>(TYPES.StrategyController).to(StrategyController);

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
