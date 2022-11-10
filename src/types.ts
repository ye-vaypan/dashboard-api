export const TYPES = {
	Application: Symbol.for('Application'),
	LoggerInterface: Symbol.for('LoggerInterface'),
	UserControllerInterface: Symbol.for('UserControllerInterface'),
	UserServiceInterface: Symbol.for('UserServiceInterface'),
	ExceptionFilterInterface: Symbol.for('ExceptionFilterInterface'),
	ConfigServiceInterface: Symbol.for('ConfigServiceInterface'),
	PrismaService: Symbol.for('PrismaService'),
	UsersRepositoryInterface: Symbol.for('UsersRepositoryInterface'),
	/* Creational patterns*/
	SingletonController: Symbol.for('SingletonController'),
	FactoryController: Symbol.for('FactoryController'),
	AbstractFactoryController: Symbol.for('AbstractFactoryController'),
	BuilderController: Symbol.for('BuilderController'),
	PrototypeController: Symbol.for('PrototypeController'),
	/* Structural patterns */
	AdapterController: Symbol.for('AdapterController'),
	BridgeController: Symbol.for('BridgeController'),
	CompositeController: Symbol.for('CompositeController'),
	FacadeController: Symbol.for('FacadeController'),
	DecoratorController: Symbol.for('DecoratorController'),
};
