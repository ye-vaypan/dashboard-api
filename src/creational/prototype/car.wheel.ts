import { ClonableInterface } from './clonable.interface';

export class CarWheel implements ClonableInterface {
	public diameter: number;
	private readonly _fixingHoleNumber: number;

	constructor(diameter: number, fixingHoleNumber: number) {
		this.diameter = diameter;
		this._fixingHoleNumber = fixingHoleNumber;
	}

	get fixingHoleNumber(): number {
		return this._fixingHoleNumber;
	}

	clone(): ClonableInterface {
		return new CarWheel(this.diameter, this._fixingHoleNumber);
	}
}
