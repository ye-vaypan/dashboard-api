export class DeviceType {
	constructor(
		private readonly browser: string,
		private readonly os: string,
		private readonly device: string,
		private readonly country: string,
	) {}

	reportType(): string {
		return `${this.browser}, ${this.os}, ${this.device}, ${this.country}`;
	}
}
