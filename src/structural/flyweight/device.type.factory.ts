import { DeviceType } from './device.type';

export class DeviceTypeFactory {
	private readonly deviceTypes: { [key: string]: DeviceType };
	private deviceTypesCount = 0;
	private static instance: DeviceTypeFactory;

	private constructor() {
		this.deviceTypes = {};
	}

	public static getInstance(): DeviceTypeFactory {
		if (!this.instance) {
			this.instance = new DeviceTypeFactory();
		}

		return this.instance;
	}

	getType(browser: string, os: string, device: string, country: string): DeviceType {
		const key = `${browser}-${os}-${device}-${country}`;
		if (!(key in this.deviceTypes)) {
			this.deviceTypes[key] = new DeviceType(browser, os, device, country);
			this.deviceTypesCount++;
		}
		return this.deviceTypes[key];
	}

	getTypesCount(): number {
		return this.deviceTypesCount;
	}
}
