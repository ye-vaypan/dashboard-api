import { ImageDecorator } from './image.decorator';

export class ImageWithWatermark extends ImageDecorator {
	private _watermark = 'watermark.png';

	save(fileData: string, path: string, name: string): string {
		const newFileData = this.addWatermark(fileData);
		return super.save(newFileData, path, name);
	}

	private addWatermark(fileData: string): string {
		this._logger.addLog('Watermark ' + this._watermark + ' added to ' + fileData);
		return fileData + ' with watermark ' + this._watermark;
	}
}
