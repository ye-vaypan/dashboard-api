import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, query, Request, Response } from 'express';
import { UserRepository } from './user.repository';
import { FileStorage } from './file.storage';
import { BaseRepository } from './base.repository';
import { User } from './user.entity';
import { DbStorage } from './db.storage';
import { ValidateMiddleware } from '../../common/validate.middleware';
import { UserRegisterDto } from '../../users/dto/user-register.dto';

export class BridgeController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/store-data',
				method: 'post',
				func: this.storeData,
				middlewares: [new ValidateMiddleware(UserRegisterDto)],
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
	 *     BridgeResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'User saved'
	 *         content:
	 *           description: Returned current stored user
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/BridgeResponse'
	 *     BridgeDataSourcesResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Available data storage types'
	 *         content:
	 *           description: Return available data storage types
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'db'
	 *     BridgeStoreRequest:
	 *       properties:
	 *         repoType:
	 *           name: repoType
	 *           description: type of repository.
	 *           type: string
	 *           default: 'db'
	 *           required: false
	 *           example: 'db'
	 *         name:
	 *           name: name
	 *           description: Username
	 *           type: string
	 *           required: true
	 *           example: 'Eugene'
	 *         email:
	 *           name: email
	 *           description: User email
	 *           type: string
	 *           required: true
	 *           example: 'test@gmail.com'
	 *         password:
	 *           name: password
	 *           description: User password
	 *           type: string
	 *           required: true
	 *           example: 'password'
	 *     BridgeFindRequest:
	 *       properties:
	 *         repoType:
	 *           name: repoType
	 *           description: type of repository.
	 *           type: string
	 *           default: 'db'
	 *           required: false
	 *           example: 'db'
	 *         email:
	 *           name: email
	 *           description: User email
	 *           type: string
	 *           required: true
	 *           example: 'test@gmail.com'
	 *     UserDataModel:
	 *       properties:
	 *         id:
	 *           name: id
	 *           description: User ID.
	 *           type: integer
	 *           example: 1
	 *         name:
	 *           name: name
	 *           description: Username
	 *           type: string
	 *           example: 'Eugene'
	 *         email:
	 *           name: email
	 *           description: User email
	 *           type: string
	 *           example: 'test@gmail.com'
	 *         password:
	 *           name: password
	 *           description: User password hash
	 *           type: string
	 *           example: 'password hash string'
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Bridge
	 *     description: Bridge pattern
	 */

	/**
	 * @swagger
	 * /bridge/store-data:
	 *   post:
	 *     description: Check Bridge pattern
	 *     tags: [Bridge]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/BridgeStoreRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/BridgeResponse'
	 */
	async storeData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let repository: BaseRepository;

		const user = new User(body.email, body.name);
		await user.setPassword(body.password, 10);

		switch (body.repoType) {
			case 'file':
				repository = new UserRepository(new FileStorage());
				break;
			case 'db':
			default:
				repository = new UserRepository(new DbStorage());
				break;
		}

		const record = await repository.createRecord(user);

		if (record !== null) {
			this.ok(res, {
				status: 'OK',
				message: 'User created',
				userRecord: record,
			});
		} else {
			this.send(res, 422, 'User already exist!');
		}
	}

	/**
	 * @swagger
	 * /bridge/get-data:
	 *   get:
	 *     description: Check Bridge pattern
	 *     tags: [Bridge]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/BridgeFindRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/BridgeResponse'
	 */

	async getData({ body, query }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let repository: BaseRepository;

		switch (body.repoType) {
			case 'file':
				repository = new UserRepository(new FileStorage());
				break;
			case 'db':
			default:
				repository = new UserRepository(new DbStorage());
				break;
		}

		const record = await repository.getRecord(body.email);

		if (record !== null) {
			this.ok(res, {
				status: 'OK',
				message: 'User created',
				userRecord: record,
			});
		} else {
			this.send(res, 422, 'User is not exist!');
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
			message: 'Available data storage types',
			content: ['file', 'db'],
		});
	}
}
