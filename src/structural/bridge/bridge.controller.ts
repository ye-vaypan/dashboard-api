import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { StorageInterface } from '../adapter/storage.interface';
import { CloudStorage } from '../adapter/cloud.storage';
import { LocalStorage } from '../adapter/local.storage';

export class BridgeController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/store-data',
				method: 'post',
				func: this.storeData,
			},
			{
				path: '/get-data',
				method: 'get',
				func: this.getData,
			},
			{
				path: '/list-data-sources',
				method: 'get',
				func: this.listDataSources,
			},
		]);
	}

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     SingletonResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Added to singleton log'
	 *         content:
	 *           description: Returned current Singleton log
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'test string 1'
	 *     SingletonRequest:
	 *       properties:
	 *         strToLog:
	 *           name: strToLog
	 *           description: Test string to put in singleton log.
	 *           type: string
	 *           required: true
	 *           example: 'test str to add'
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Singleton
	 *     description: Singleton pattern
	 */

	/**
	 * @swagger
	 * /singleton/add-log:
	 *   post:
	 *     description: Check singleton pattern
	 *     tags: [Singleton]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/SingletonRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/SingletonResponse'
	 */
	async storeData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const msg = 'Some default success message';

		try {
			this.ok(res, {
				status: 'OK',
				message: msg,
			});
		} catch (err) {
			this.send(res, 404, 'Some errors occurred');
		}
	}

	/**
	 * @swagger
	 * /singleton/get-log:
	 *   get:
	 *     description: Check singleton pattern
	 *     tags: [Singleton]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/SingletonResponse'
	 */

	async getData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const msg = 'Some default success message';

		try {
			this.ok(res, {
				status: 'OK',
				message: msg,
			});
		} catch (err) {
			this.send(res, 404, 'Some errors occurred');
		}
	}

	/**
	 * @swagger
	 * /bridge/list-data-sources:
	 *   get:
	 *     description: Check bridge pattern
	 *     tags: [Bridge]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/BridgeDataSourcesResponse'
	 */
	async listDataSources(req: Request, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, {
			status: 'OK',
			message: 'Current log content',
			content: ['file', 'db'],
		});
	}
}
