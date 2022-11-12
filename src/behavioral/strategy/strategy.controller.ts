import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, query, Request, Response } from 'express';
import students from '../../../students.json';
import { StudentSorter } from './student.sorter';
import { StudentMarkDesc } from './student.mark.desc';
import { StudentAlphabetAsc } from './student.alphabet.asc';

export class StrategyController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/get-report',
				method: 'get',
				func: this.getReport,
			},
			{
				path: '/list-types',
				method: 'get',
				func: this.listTypes,
			},
		]);
	}

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     StudentsReport:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Students sorted'
	 *         content:
	 *           description: Array of students
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/Student'
	 *     StudentsSortingTypes:
	 *       properties:
	 *         status:
	 *           description: Response status text
	 *           type: string
	 *           example: 'OK'
	 *         message:
	 *           description: Response message text
	 *           type: string
	 *           example: 'Available types'
	 *         content:
	 *           description: Return available students sorting types
	 *           type: array
	 *           items:
	 *             type: string
	 *             example: 'AlphabetAsc'
	 *     SortingRequest:
	 *       properties:
	 *         type:
	 *           name: type
	 *           description: Students sorting type.
	 *           type: string
	 *           default: 'AlphabetAsc'
	 *           required: false
	 *           example: 'AlphabetAsc'
	 *     Student:
	 *       properties:
	 *         mark:
	 *           name: mark
	 *           description: Student's avg mark.
	 *           type: integer
	 *           example: 5
	 *         name:
	 *           name: name
	 *           description: Student's name.
	 *           type: string
	 *           example: John Doe
	 *         faculty:
	 *           name: faculty
	 *           description: Student's faculty.
	 *           type: string
	 *           example: FOIT
	 */

	/**
	 * @swagger
	 * tags:
	 *   - name: Strategy
	 *     description: Strategy pattern
	 */

	/**
	 * @swagger
	 * /strategy/get-report:
	 *   get:
	 *     description: Strategy pattern
	 *     tags: [Strategy]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/SortingRequest'
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/StudentsReport'
	 */
	async getReport({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const studentSorter = new StudentSorter();
		const data = students;

		switch (body.type) {
			case 'MarkDesc':
				studentSorter.setSorter(new StudentMarkDesc());
				break;
			case 'AlphabetAsc':
			default:
				studentSorter.setSorter(new StudentAlphabetAsc());
				break;
		}

		const report = studentSorter.buildReport(data);

		this.ok(res, {
			status: 'OK',
			message: 'Students sorted',
			report: report,
		});
	}

	/**
	 * @swagger
	 * /strategy/list-types:
	 *   get:
	 *     description: Strategy pattern
	 *     tags: [Strategy]
	 *     responses:
	 *       200:
	 *         description: Successful API answer
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/StudentsSortingTypes'
	 */
	async listTypes(req: Request, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, {
			status: 'OK',
			message: 'Available students sorting types',
			content: ['MarkDesc', 'AlphabetAsc'],
		});
	}
}
