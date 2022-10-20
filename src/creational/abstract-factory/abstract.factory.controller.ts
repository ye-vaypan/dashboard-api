import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { WhiteFigureFactory } from './white.figure.factory';
import { BlackFigureFactory } from './black.figure.factory';

export class AbstractFactoryController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/play',
				method: 'post',
				func: this.play,
			},
			{
				path: '/get-color-types',
				method: 'get',
				func: this.getTypes,
			},
		]);
	}

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     ColorTypeResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Shows available personage colors'
	 *         content:
	 *           description: Currently available personage colors.
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'black'
	 *     InitGameResponse:
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
	 *     NewPlayRequest:
	 *       properties:
	 *         colorType:
	 *           name: colorType
	 *           description: Type of color.
	 *           type: string
	 *           required: true
	 *           example: 'white'
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Abstract Factory
	 *     description: Abstract Factory pattern
	 */

	/**
	 * @swagger
	 * /abstract-factory/play:
	 *   post:
	 *     description: Check abstract factory pattern
	 *     tags: [Abstract Factory]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/NewPlayRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/InitGameResponse'
	 */
	async play({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let factory = undefined;
		switch (body.colorType) {
			case 'black':
				factory = new BlackFigureFactory();
				break;
			case 'white':
				factory = new WhiteFigureFactory();
				break;
		}

		if (typeof factory !== 'undefined') {
			const figureKing = factory.createKing();
			const figureQueen = factory.createQueen();

			figureKing.init();
			figureQueen.init();

			this.ok(res, {
				status: 'OK',
				message: 'Chess pieces arranged',
				content: {
					figureKing: {
						color: figureKing.getColor(),
						currentPosition: figureKing.currentPosition(),
					},
					figureQueen: {
						color: figureQueen.getColor(),
						currentPosition: figureQueen.currentPosition(),
					},
				},
			});
		} else {
			this.send(res, 404, {
				status: 'ERROR',
				message: 'Unknown color type.',
			});
		}
	}

	/**
	 * @swagger
	 * /factory/get-color-types:
	 *   get:
	 *     description: Check factory method pattern. Get available personage types
	 *     tags: [Abstract Factory]
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
			message: 'Figures color types',
			content: ['white', 'black'],
		});
	}
}
