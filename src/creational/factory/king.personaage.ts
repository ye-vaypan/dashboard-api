import { PersonageInterface } from './personage.interface';
import { SingletonEntity } from '../singleton/singleton.entity';

export class KingPersonage implements PersonageInterface {
	move(x: number, y: number): string {
		const text = `King moved to position (${x}, ${y})`;
		const moveLog = SingletonEntity.getInstance();
		moveLog.addLog(text);
		return text;
	}
}
