import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { ClientImage } from './client.image';
import { SingletonEntity } from '../../creational/singleton/singleton.entity';
import { ImageWithWatermark } from './image.with.watermark';
import { ImageInterface } from './image.interface';
import { ImageToPng } from './image.to.png';
import { ImageThumb } from './image.thumb';

export class DecoratorController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/save-image',
				method: 'post',
				func: this.saveImage,
			},
			{
				path: '/get-decor-types',
				method: 'get',
				func: this.getDecorTypes,
			},
		]);
	}

	/**
	 * @swagger
	 * tags:
	 *   - name: Decorator
	 *     description: Decorator pattern
	 */

	/**
	 * @swagger
	 * /decorator/get-decor-types:
	 *   get:
	 *     description: Decorator pattern - get available decorators
	 *     tags: [Decorator]
	 *     requestBody:
	 *       required: false
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 status:
	 *                   description: Response status text
	 *                   type: string
	 *                   example: 'OK'
	 *                 message:
	 *                   description: Response message text
	 *                   type: string
	 *                   example: 'List of available image decorators'
	 *                 content:
	 *                   type: array
	 *                   items:
	 *                     type: string
	 *                     example: 'watermarkEnable'
	 */

	async getDecorTypes({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, {
			status: 'OK',
			message: 'List of available image decorators',
			content: ['watermarkEnable', 'imageToPngEnable', 'thumbGenerateEnable'],
		});
	}

	/**
	 * @swagger
	 * /decorator/save-image:
	 *   post:
	 *     description: Decorator pattern - save image with options
	 *     tags: [Decorator]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               fileInput:
	 *                 description: Emulated file
	 *                 type: string
	 *                 example: 'imageToSave.jpg'
	 *               imageToPngEnable:
	 *                 required: false
	 *                 description: Enable image to png conversion
	 *                 type: boolean
	 *                 example: true
	 *               watermarkEnable:
	 *                 required: false
	 *                 description: Enable add watermark for image
	 *                 type: boolean
	 *                 example: true
	 *               thumbGenerateEnable:
	 *                 required: false
	 *                 description: Enable thumbnails generation
	 *                 type: boolean
	 *                 example: true
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 status:
	 *                   description: Response status text
	 *                   type: string
	 *                   example: 'OK'
	 *                 message:
	 *                   description: Response message text
	 *                   type: string
	 *                   example: 'Image saved'
	 *                 content:
	 *                   description: Returned log of steps
	 *                   type: object
	 *                   properties:
	 *                     savedData:
	 *                       description: Emulated data
	 *                       type: string
	 *                       example: 'imageToSave.jpg saved to:  /path/to/images/'
	 *                     savingLog:
	 *                       description: Wrappers log to show steps.
	 *                       type: array
	 *                       items:
	 *                         type: string
	 *                         example: 'Thumbnails for imageToSave.jpg saved to  /path/to/thumbs/'
	 */

	async saveImage({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		console.log(body);
		let image: ImageInterface;
		const logger = SingletonEntity.getInstance();
		image = new ClientImage();

		if (body.thumbGenerateEnable) image = new ImageThumb(image);
		if (body.watermarkEnable) image = new ImageWithWatermark(image);
		if (body.imageToPngEnable) image = new ImageToPng(image);

		const savedData = image.save(body.fileInput, '/path/to/images/', 'new-image-name');

		this.ok(res, {
			status: 'OK',
			message: 'Image saved',
			content: {
				savedData: savedData,
				savingLog: logger.log,
			},
		});
	}
}
