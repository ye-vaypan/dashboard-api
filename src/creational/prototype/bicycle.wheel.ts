import {ClonableInterface} from "./clonable.interface";
import {Wheel} from "./wheel";

export class BicycleWheel implements ClonableInterface{

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
        return new BicycleWheel(this.diameter, this._fixingHoleNumber);
    }
}