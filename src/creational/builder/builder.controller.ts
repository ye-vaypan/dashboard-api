import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { BuilderDirector } from './builder.director';
import { ComputerBuilder } from './computer.builder';

export class BuilderController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/build-computer',
				method: 'post',
				func: this.buildComputer,
			},
			{
				path: '/list-variants',
				method: 'get',
				func: this.getVariants,
			},
		]);
	}

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     ComputerVariants:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Shows available computer variants'
	 *         content:
	 *           description: Currently available variants.
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'basic'
	 *     ComputerResponse:
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
	 *           description: Parts in build
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: '500 GB'
	 *     ComputerRequest:
	 *       properties:
	 *         variant:
	 *           name: variant
	 *           description: Computer variant.
	 *           type: string
	 *           required: false
	 *           example: 'basic'
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Builder
	 *     description: Builder pattern
	 */

	/**
	 * @swagger
	 * /builder/build-computer:
	 *   post:
	 *     description: Check builder pattern
	 *     tags: [Builder]
	 *     requestBody:
	 *       required: false
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ComputerRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ComputerResponse'
	 */

	async buildComputer({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const director = new BuilderDirector();
		const builder = new ComputerBuilder();
		director.builder = builder;
		let computer = undefined;
		switch (body.variant) {
			case 'full':
				director.buildFull();
				computer = builder.getComputer().listParts();
				break;
			case 'custom':
				builder.setHdd('980 GB SSD');
				builder.setRam('32 GB');
				builder.setExternalGraphic('Radeon Vega Pro');
				computer = builder.getComputer().listParts();
				break;
			case 'basic':
			default:
				director.buildBase();
				computer = builder.getComputer().listParts();
				break;
		}

		this.ok(res, {
			status: 'OK',
			message: 'Your computer is built,',
			content: computer,
		});
	}

	/**
	 * @swagger
	 * /builder/list-variants:
	 *   get:
	 *     description: Check factory method pattern. Get available personage types
	 *     tags: [Builder]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ComputerVariants'
	 */

	async getVariants({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, {
			status: 'OK',
			message: 'Currently available computer variants. Default is "basic"',
			content: ['basic', 'full', 'custom'],
		});
	}
}
