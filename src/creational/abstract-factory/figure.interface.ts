export interface FigureInterface {
	move(x: string, y: string): string;
	init(): void;
	currentPosition(): object;
	getColor(): string;
}
