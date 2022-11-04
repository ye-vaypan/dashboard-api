import { FileInterface } from './file.interface';

export class Directory implements FileInterface {
	private files: FileInterface[];
	private _name: string;

	constructor() {
		this.files = [];
	}

	public getType(): string {
		return 'directory';
	}

	public addFile(file: FileInterface): void {
		this.files.push(file);
	}

	public getSize(): number {
		let size = 0;
		this.files.forEach((file) => (size += file.getSize()));
		return size;
	}

	public getContent(): object {
		const dirContent: any[] = [];
		this.files.forEach((file) => dirContent.push(file.getContent()));
		return dirContent;
	}

	get name(): string {
		return this._name;
	}

	set name(n: string) {
		this._name = n;
	}
}
