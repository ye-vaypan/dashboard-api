export interface IteratorInterface {
	hasNext(): boolean;
	getNext(): any;
	getCurrent(): any;
	getCurrentPosition(): number;
	reset(): void;
}
