import { SingletonEntity } from '../singleton/singleton.entity';
import { QueenPersonageInterface } from './queen.personage.interface';

export class BlackQueenPersonage implements QueenPersonageInterface {
	private _color = 'black';
	private _currentX: string;
	private _currentY: string;

	move(x: string, y: string): string {
		const text = `Black Queen moved to position (${x}, ${y})`;
		const moveLog = SingletonEntity.getInstance();
		moveLog.addLog(text);
		return text;
	}

	init(): void {
		this._currentX = 'd';
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
