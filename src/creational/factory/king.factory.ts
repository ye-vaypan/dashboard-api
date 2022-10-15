import { PersonageInterface } from './personage.interface';
import { PersonageFactory } from './personage.factory';
import { KingPersonage } from './king.personaage';

export class KingFactory extends PersonageFactory {
	public createPersonage(): PersonageInterface {
		return new KingPersonage();
	}
}
