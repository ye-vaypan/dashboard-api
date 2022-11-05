import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, query, Request, Response } from 'express';
import { Directory } from './directory';
import { TextFile } from './text.file';
import { FileInterface } from './file.interface';

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
	 *     CompositeResponse:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Requested tree structure created'
	 *         content:
	 *           description: Returned emulated directories structure
	 *           $ref: '#/components/schemas/Composite'
	 *     CompositeRequest:
	 *       properties:
	 *         depth:
	 *           name: depth
	 *           description: depth of directories structure.
	 *           type: integer
	 *           required: true
	 *           example: 1
	 *         filesCount:
	 *           name: filesCount
	 *           description: Files count to store in each directory
	 *           type: integer
	 *           required: true
	 *           example: 1
	 *         dirsCount:
	 *           name: dirsCount
	 *           description: Directories count to put in each directory except last one.
	 *           type: integer
	 *           required: true
	 *           example: 2
	 *         maxFileSize:
	 *           name: maxFileSize
	 *           description: maxFileSize
	 *           type: integer
	 *           required: true
	 *           example: 50
	 *     Composite:
	 *       properties:
	 *         totalSize:
	 *           name: totalSize
	 *           description: Total size of all files in all directories.
	 *           type: integer
	 *           example: 1
	 *         dirContent:
	 *           name: dirContent
	 *           description: Directories listed content
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'file_0.txt 19Kb'
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Composite
	 *     description: Composite pattern
	 */

	/**
	 * @swagger
	 * /composite/test-composite-structure:
	 *   post:
	 *     description: Check Composite pattern
	 *     tags: [Composite]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/CompositeRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/CompositeResponse'
	 */
	async testStructure({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const rootDir = new Directory();
		rootDir.name = 'directory root';

		for (let j = 0; j < body.dirsCount; j++) {
			const sub = this.buildStructure(new Directory(), body.filesCount, body.dirsCount, body.maxFileSize, body.depth);
			rootDir.addFile(sub);
		}
		for (let n = 0; n < body.filesCount; n++) {
			const file = new TextFile(Math.floor(Math.random() * body.maxFileSize) + 1);
			file.name = `file_${n}.${file.getType()}`;
			rootDir.addFile(file);
		}

		this.ok(res, {
			status: 'OK',
			message: 'Requested tree structure created',
			content: {
				totalSize: rootDir.getSize(),
				dirContent: rootDir.getContent(),
			},
		});
	}

	private buildStructure(
		dir: Directory,
		filesCount: number,
		dirsCount: number,
		maxFileSize: number,
		depth: number,
		counter = 0,
	): FileInterface {
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
