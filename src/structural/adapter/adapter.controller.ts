import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { CloudStorage } from './cloud.storage';
import { LocalStorage } from './local.storage';
import { StorageInterface } from './storage.interface';

export class AdapterController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/store-file',
				method: 'post',
				func: this.storeFile,
			},
			{
				path: '/get-file',
				method: 'get',
				func: this.getFile,
			},
			{
				path: '/list-files',
				method: 'get',
				func: this.listAll,
			},
			{
				path: '/list-storage-types',
				method: 'get',
				func: this.listStorageTypes,
			},
		]);
	}

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     AdapterResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Added to Adapter log'
	 *         content:
	 *           description: Returned current Adapter log
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'test string 1'
	 *     AdapterRequest:
	 *       properties:
	 *         strToLog:
	 *           name: strToLog
	 *           description: Test string to put in Adapter log.
	 *           type: string
	 *           required: true
	 *           example: 'test str to add'
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Adapter
	 *     description: Adapter pattern
	 */

	/**
	 * @swagger
	 * /adapter/add-log:
	 *   post:
	 *     description: Check adapter pattern
	 *     tags: [Adapter]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/AdapterRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/AdapterResponse'
	 */
	async storeFile({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let storage: StorageInterface;
		let msg: string;
		const pathToStore = 'users/avatars';

		switch (body.storageType) {
			case 'cloud':
				storage = new CloudStorage();
				msg = 'File stored to cloud storage';
				break;
			case 'local':
			default:
				storage = new LocalStorage();
				msg = 'File stored to local filesystem';
				// newName = 'user_id';
				break;
		}

		try {
			this.ok(res, {
				status: 'OK',
				message: msg,
				content: storage.storeFile(body.fileToStore, pathToStore),
			});
		} catch (err) {
			this.send(res, 404, 'File already exist');
		}
	}

	/**
	 * @swagger
	 * /adapter/get-log:
	 *   get:
	 *     description: Check Adapter pattern
	 *     tags: [Adapter]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/AdapterResponse'
	 */

	async getFile({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let storage: StorageInterface;
		let msg: string;

		switch (body.storageType) {
			case 'cloud':
				storage = new CloudStorage();
				msg = 'File from cloud storage';
				break;
			case 'local':
			default:
				storage = new LocalStorage();
				msg = 'File from local storage';
				break;
		}

		try {
			this.ok(res, {
				status: 'OK',
				message: msg,
				content: storage.getFileUrl(body.fileId),
			});
		} catch (err) {
			this.send(res, 404, 'File not found');
		}
	}

	async listAll({ body, query }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let storage: StorageInterface;

		switch (query.storageType) {
			case 'cloud':
				storage = new CloudStorage();
				break;
			case 'local':
			default:
				storage = new LocalStorage();
				break;
		}

		this.ok(res, {
			status: 'OK',
			message: 'Current log content',
			content: storage.listStoredFileIds(),
		});
	}

	async listStorageTypes(req: Request, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, {
			status: 'OK',
			message: 'Current log content',
			content: ['local', 'cloud'],
		});
	}
}
