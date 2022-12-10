import {IteratorInterface} from "./iterator.interface";

export interface IterableInterface {
    createIterator(): IteratorInterface
}