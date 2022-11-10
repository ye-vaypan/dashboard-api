import { ImageDecorator } from './image.decorator';
import { ImageInterface } from './image.interface';

export class ImageToPng extends ImageDecorator {
	save(fileData: string, path: string, name: string): string {
		const newFileData = this.convert(fileData);
		return super.save(newFileData, path, name);
	}

	private convert(fileData: string): string {
		this._logger.addLog(fileData + ' converted to png format');
		return fileData + ' converted to png format';
	}
}
