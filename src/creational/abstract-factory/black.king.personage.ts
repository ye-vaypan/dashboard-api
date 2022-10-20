import { SingletonEntity } from '../singleton/singleton.entity';
import { KingPersonageInterface } from './king.personage.interface';

export class BlackKingPersonage implements KingPersonageInterface {
	private _color = 'black';
	private _currentX: string;
	private _currentY: string;

	move(x: string, y: string): string {
		const text = `Black King moved to position (${x}, ${y})`;
		const moveLog = SingletonEntity.getInstance();
		moveLog.addLog(text);
		return text;
	}

	init(): void {
		this._currentX = 'e';
		this._currentY = '8';
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
