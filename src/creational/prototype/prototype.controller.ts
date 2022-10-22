import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { CarWheel } from './car.wheel';
import { WheelStorage } from './wheel.storage';

export class PrototypeController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/create-car-wheel',
				method: 'post',
				func: this.createWheel,
			},
			{
				path: '/clone-car-wheel',
				method: 'post',
				func: this.cloneWheel,
			},
			{
				path: '/get-car-wheels',
				method: 'get',
				func: this.getWheels,
			},
		]);
	}

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     PrototypeResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Shows all stored wheels.'
	 *         content:
	 *           description: List of all stored wheels.
	 *           type: array
	 *           items:
	 *             $ref: '#/components/schemas/CarWheel'
	 *     CarWheel:
	 *       properties:
	 *         diameter:
	 *           type: number
	 *           example: 16
	 *         _fixingHoleNumber:
	 *           type: number
	 *           example: 5
	 *     CreateWheelRequest:
	 *       properties:
	 *         dia:
	 *           name: dia
	 *           description: Diameter of wheel.
	 *           type: number
	 *           required: true
	 *           example: 16
	 *         fix:
	 *           name: fix
	 *           description: Number of fixing wholes of wheel.
	 *           type: number
	 *           required: true
	 *           example: 5
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Prototype
	 *     description: Prototype pattern
	 */

	/**
	 * @swagger
	 * /prototype/create-car-wheel:
	 *   post:
	 *     description: Check Prototype pattern
	 *     tags: [Prototype]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/CreateWheelRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/PrototypeResponse'
	 */

	async createWheel({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const wheel = new CarWheel(body.dia, body.fix);
		const storage = WheelStorage.getInstance();
		storage.addToStorage(wheel);

		this.ok(res, {
			status: 'OK',
			message: 'Your computer is built,',
			content: storage.storage,
		});
	}

	/**
	 * @swagger
	 * /prototype/clone-car-wheel:
	 *   post:
	 *     description: Check Prototype pattern
	 *     tags: [Prototype]
	 *     requestBody:
	 *       required: false
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/PrototypeResponse'
	 */

	async cloneWheel({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const storage = WheelStorage.getInstance();
		const wheel = storage.storage[0];

		storage.addToStorage(wheel.clone());

		this.ok(res, {
			status: 'OK',
			message: 'Your computer is built,',
			content: storage.storage,
		});
	}

	/**
	 * @swagger
	 * /prototype/get-car-wheels:
	 *   get:
	 *     description: Get all stored wheels.
	 *     tags: [Prototype]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/PrototypeResponse'
	 */

	async getWheels({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const storage = WheelStorage.getInstance();

		this.ok(res, {
			status: 'OK',
			message: 'Added wheels to storage',
			content: storage.storage,
		});
	}
}
