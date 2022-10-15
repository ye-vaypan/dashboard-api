import { PersonageInterface } from './personage.interface';
import { PersonageFactory } from './personage.factory';
import { QueenPersonaage } from './queen.personaage';

export class QueenFactory extends PersonageFactory {
	public createPersonage(): PersonageInterface {
		return new QueenPersonaage();
	}
}
