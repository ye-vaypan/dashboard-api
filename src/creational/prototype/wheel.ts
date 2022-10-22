import {ClonableInterface} from "./clonable.interface";

export abstract class Wheel implements ClonableInterface {
    diameter: number;
    abstract clone(): ClonableInterface;
}
