import { Device } from './device';
import { DeviceTypeFactory } from './device.type.factory';

export class DeviceStorage {
	public devices: Device[];
	public deviceFactory: DeviceTypeFactory;

	constructor() {
		this.devices = [];
		this.deviceFactory = DeviceTypeFactory.getInstance();
	}

	addDevice(id: number, browser: string, os: string, device: string, country: string, ip: string): void {
		const type = this.deviceFactory.getType(browser, os, device, country);
		this.devices.push(new Device(id, ip, type));
	}
}
