import { BuilderInterface } from './builder.interface';
import { Computer } from './computer';

export class ComputerBuilder implements BuilderInterface {
	private computer: Computer;

	constructor() {
		this.reset();
	}

	reset(): void {
		this.computer = new Computer();
	}

	setHdd(hdd: string): void {
		this.computer.parts.push(hdd);
	}
	setRam(ram: string): void {
		this.computer.parts.push(ram);
	}

	setExternalGraphic(externalGraphic: string): void {
		this.computer.parts.push(externalGraphic);
	}

	setWifiModule(wifiModule: string): void {
		this.computer.parts.push(wifiModule);
	}

	public getComputer(): Computer {
		return this.computer;
	}
}
