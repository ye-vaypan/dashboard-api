import { PersonageInterface } from './personage.interface';

export abstract class PersonageFactory {
	public abstract createPersonage(): PersonageInterface;
}
