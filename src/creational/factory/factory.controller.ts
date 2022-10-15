import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { KingFactory } from './king.factory';
import { QueenFactory } from './queen.factory';
import { PersonageFactory } from './personage.factory';
import { SingletonEntity } from '../singleton/singleton.entity';

export class FactoryController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/play',
				method: 'post',
				func: this.play,
			},
			{
				path: '/get-personage-types',
				method: 'get',
				func: this.getTypes,
			},
			{
				path: '/get-play-hist',
				method: 'get',
				func: this.getPlayHist,
			},
		]);
	}

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     PersonageTypeResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Shows available personage types'
	 *         content:
	 *           description: Currently available personage types.
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'queen'
	 *     GameplayHistoryResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Game moves hist'
	 *         content:
	 *           description: History log
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'Queen moved to position (1, 5)'
	 *     OneMoveResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Personage has moved'
	 *         content:
	 *           description: one move result
	 *           type: string
	 *           example: 'Queen moved to position (1, 5)'
	 *     PlayRequest:
	 *       properties:
	 *         personType:
	 *           name: personType
	 *           description: Type of personage.
	 *           type: string
	 *           required: true
	 *           example: 'king'
	 *         x:
	 *           name: x
	 *           description: \'x\' coordinate.
	 *           type: int
	 *           required: true
	 *           example: 1
	 *         y:
	 *           name: y
	 *           description: \'y\' coordinate.
	 *           type: int
	 *           required: true
	 *           example: 3
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Factory
	 *     description: Factory method pattern
	 */

	/**
	 * @swagger
	 * /factory/play:
	 *   post:
	 *     description: Check factory pattern
	 *     tags: [Factory]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/PlayRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/OneMoveResponse'
	 */
	async play({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let factory;
		switch (body.personType) {
			case 'king':
				factory = new KingFactory();
				break;
			case 'queen':
				factory = new QueenFactory();
				break;
		}

		if (factory instanceof PersonageFactory) {
			const personage = factory.createPersonage();

			const result = personage.move(body.x, body.y);

			this.ok(res, {
				status: 'OK',
				message: 'Personage has moved',
				content: result,
			});
		} else {
			this.send(res, 404, {
				status: 'ERROR',
				message: 'Unknown personage type.',
			});
		}
	}

	/**
	 * @swagger
	 * /factory/get-personage-types:
	 *   get:
	 *     description: Check factory method pattern. Get available personage types
	 *     tags: [Factory]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/PersonageTypeResponse'
	 */

	async getTypes({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, {
			status: 'OK',
			message: 'Currently available personage types',
			content: ['king', 'queen'],
		});
	}

	/**
	 * @swagger
	 * /factory/get-play-hist:
	 *   get:
	 *     description: Check factory method pattern. Get gameplay history;
	 *     tags: [Factory]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/GameplayHistoryResponse'
	 */
	async getPlayHist({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const log = SingletonEntity.getInstance();
		this.ok(res, {
			status: 'OK',
			message: 'Current play history content',
			content: log.log,
		});
	}
}
