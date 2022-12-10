export class TrackEntity {
	private readonly _tLength: number;
	private readonly _name: string;

	constructor(name: string, tLength: number) {
		this._name = name;
		this._tLength = tLength;
	}

	get name(): string {
		return this._name;
	}

	get tLength(): number {
		return this._tLength;
	}
}
