import { BuilderInterface } from './builder.interface';

export class BuilderDirector {
	private _builder: BuilderInterface;

	set builder(builder: BuilderInterface) {
		this._builder = builder;
	}

	public buildBase(): void {
		this._builder.setHdd('500 GB');
		this._builder.setRam('8 GB');
	}

	public buildFull(): void {
		this._builder.setHdd('500 GB');
		this._builder.setRam('8 GB');
		this._builder.setExternalGraphic('Nvidia 1060');
		this._builder.setWifiModule('Realtek');
	}
}
