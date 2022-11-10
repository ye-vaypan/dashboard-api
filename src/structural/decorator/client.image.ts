import { ImageInterface } from './image.interface';
import { SingletonEntity } from '../../creational/singleton/singleton.entity';

export class ClientImage implements ImageInterface {
	private readonly _logger: SingletonEntity;

	constructor() {
		this._logger = SingletonEntity.getInstance();
	}

	save(fileData: string, path: string, name: string): string {
		this._logger.addLog(fileData + ' saved to:  ' + path);
		this._logger.addLog('----------------------------------------------------------------------------------');
		return fileData + ' saved to:  ' + path;
	}
}
