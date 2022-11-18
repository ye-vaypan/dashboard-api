export class UserConnectionEntity {
	constructor(
		private readonly _browser: string,
		private readonly _os: string,
		private readonly _device: string,
		private readonly _country: string,
		private readonly _ip: string,
	) {}

	get browser(): string {
		return this._browser;
	}

	get os(): string {
		return this._os;
	}

	get device(): string {
		return this._device;
	}

	get country(): string {
		return this._country;
	}

	get ip(): string {
		return this._ip;
	}
}
