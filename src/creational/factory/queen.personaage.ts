import { PersonageInterface } from './personage.interface';
import { SingletonEntity } from '../singleton/singleton.entity';

export class QueenPersonaage implements PersonageInterface {
	move(x: number, y: number): string {
		const text = `Queen moved to position (${x}, ${y})`;
		const moveLog = SingletonEntity.getInstance();
		moveLog.addLog(text);
		return text;
	}
}
