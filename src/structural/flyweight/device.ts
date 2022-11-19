import { DeviceType } from './device.type';

export class Device {
	private id: number;
	private ip: string;
	private deviceType: DeviceType;

	constructor(id: number, ip: string, deviceType: DeviceType) {
		this.id = id;
		this.ip = ip;
		this.deviceType = deviceType;
	}
}
