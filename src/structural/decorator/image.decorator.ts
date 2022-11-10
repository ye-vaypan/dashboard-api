import { ImageInterface } from './image.interface';
import { SingletonEntity } from '../../creational/singleton/singleton.entity';

export class ImageDecorator implements ImageInterface {
	private _image: ImageInterface;
	protected _logger: SingletonEntity;

	constructor(image: ImageInterface) {
		this._image = image;
		this._logger = SingletonEntity.getInstance();
	}

	save(fileData: string, path: string, name: string): string {
		return this._image.save(fileData, path, name);
	}
}
