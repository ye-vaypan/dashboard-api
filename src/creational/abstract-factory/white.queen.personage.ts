import { SingletonEntity } from '../singleton/singleton.entity';
import { QueenPersonageInterface } from './queen.personage.interface';

export class WhiteQueenPersonage implements QueenPersonageInterface {
	private _color = 'white';
	private _currentX: string;
	private _currentY: string;

	move(x: string, y: string): string {
		const text = `White Queen moved to position (${x}, ${y})`;
		const moveLog = SingletonEntity.getInstance();
		moveLog.addLog(text);
		return text;
	}

	init(): void {
		this._currentX = 'd';
		this._currentY = '1';
	}

	getColor(): string {
		return this._color;
	}

	public currentPosition(): object {
		return {
			x: this._currentX,
			y: this._currentY,
		};
	}
}
