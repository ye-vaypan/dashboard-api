import { ImageDecorator } from './image.decorator';
import { ImageInterface } from './image.interface';

export class ImageThumb extends ImageDecorator {
	save(fileData: string, path: string, name: string): string {
		this.saveThumb(fileData);
		return super.save(fileData, path, name);
	}

	saveThumb(fileData: string): void {
		this._logger.addLog('Thumbnails for ' + fileData + ' saved to  /path/to/thumbs/');
	}
}
