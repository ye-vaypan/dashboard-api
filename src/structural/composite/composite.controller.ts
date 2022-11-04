import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, query, Request, Response } from 'express';
import { Directory } from './directory';
import { TextFile } from './text.file';

export class CompositeController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/test-composite-structure',
				method: 'post',
				func: this.testStructure,
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
	async testStructure({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const rootDir = new Directory();
		rootDir.name = 'directory root';
		// for (let i = 0; i < body.depth; i++) {
		for (let j = 0; j < body.dirsCount; j++) {
			const sub = this.buildStructure(new Directory(), body.filesCount, body.dirsCount, body.fileSizeTo, body.depth);
			rootDir.addFile(sub);
		}
		// }
		for (let n = 0; n < body.filesCount; n++) {
			const file = new TextFile(Math.floor(Math.random() * body.fileSizeTo) + 1);
			file.name = `file_${n}.${file.getType()}`;
			rootDir.addFile(file);
		}

		// rootDir.getSize();

		// if (record !== null) {
		this.ok(res, {
			status: 'OK',
			message: 'Requested tree structure created',
			content: {
				totalSize: rootDir.getSize(),
				dirContent: rootDir.getContent(),
			},
		});
		// } else {
		// 	this.send(res, 422, 'User already exist!');
		// }
	}

	private buildStructure(
		dir: Directory,
		filesCount: number,
		dirsCount: number,
		maxFileSize: number,
		depth: number,
		counter = 0,
	) {
		++counter;
		for (let i = 0; i < dirsCount; i++) {
			dir.name = `sub_dir_depth_${counter}`;
			if (counter < depth) {
				dir.addFile(this.buildStructure(new Directory(), filesCount, dirsCount, maxFileSize, depth, counter));
			}
		}
		for (let n = 0; n < filesCount; n++) {
			const file = new TextFile(Math.floor(Math.random() * maxFileSize) + 1);
			file.name = `file_${n}.${file.getType()}`;
			dir.addFile(file);
		}

		return dir;
	}
}
