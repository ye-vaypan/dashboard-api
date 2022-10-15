import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { SingletonEntity } from './singleton.entity';

export class SingletonController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/add-log',
				method: 'post',
				func: this.addLog,
			},
			{
				path: '/get-log',
				method: 'get',
				func: this.getLog,
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
	async addLog({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const singleton = SingletonEntity.getInstance();
		this.loggerService.log(body);
		singleton.addLog(body.strToLog);

		this.ok(res, {
			status: 'OK',
			message: 'Added to singleton log',
			content: singleton.log,
		});
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

	async getLog({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const singleton = SingletonEntity.getInstance();

		this.ok(res, {
			status: 'OK',
			message: 'Current log content',
			content: singleton.log,
		});
	}
}
