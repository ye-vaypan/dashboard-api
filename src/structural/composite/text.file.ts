import { FileInterface } from './file.interface';

export class TextFile implements FileInterface {
	private readonly size: number;
	private _name: string;

	constructor(size: number) {
		this.size = size;
	}

	public getType(): string {
		return 'txt';
	}

	public getSize(): number {
		return this.size;
	}

	getContent(): string {
		return `${this.name} ${this.size}Kb`;
	}

	get name(): string {
		return this._name;
	}

	set name(n: string) {
		this._name = n;
	}
}
