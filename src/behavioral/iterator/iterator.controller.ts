import { BaseController } from '../../common/base.controller';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import 'reflect-metadata';
import { TrackCollection } from './track.collection';
import { TrackEntity } from './track.entity';
import { TrackIterator } from './track.iterator';

@injectable()
export class IteratorController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/init-iterator',
				method: 'get',
				func: this.initIterator,
			},
			{
				path: '/has-next',
				method: 'get',
				func: this.hasNext,
			},
			{
				path: '/get-next',
				method: 'get',
				func: this.getNext,
			},
			{
				path: '/reset',
				method: 'get',
				func: this.reset,
			},
			{
				path: '/current',
				method: 'get',
				func: this.current,
			},
		]);
	}

	async initIterator(req: Request, res: Response, next: NextFunction): Promise<void> {
		const collection = TrackCollection.getCollection();

		for (let i = 0; i < 10; i++) {
			collection.addToCollection(new TrackEntity(`test-${i}`, Math.random() * 100));
		}

		this.ok(res, {
			status: 'OK',
			message: 'Iterator initiated',
		});
	}

	async hasNext(req: Request, res: Response, next: NextFunction): Promise<void> {
		const iterator = TrackCollection.getCollection().createIterator();
		this.ok(res, {
			status: 'OK',
			message: 'Is iterator has next el.',
			content: {
				hasNextEl: iterator.hasNext(),
			},
		});
	}

	async getNext(req: Request, res: Response, next: NextFunction): Promise<void> {
		const iterator = TrackCollection.getCollection().createIterator();
		this.ok(res, {
			status: 'OK',
			message: 'Iterator next el.',
			content: {
				nextEl: iterator.getNext(),
			},
		});
	}

	async reset(req: Request, res: Response, next: NextFunction): Promise<void> {
		const iterator = TrackCollection.getCollection().createIterator();
		iterator.reset();
		this.ok(res, {
			status: 'OK',
			message: 'Iterator reset.',
			content: {
				currentPosition: iterator.getCurrentPosition(),
			},
		});
	}

	async current(req: Request, res: Response, next: NextFunction): Promise<void> {
		const iterator = TrackCollection.getCollection().createIterator();
		this.ok(res, {
			status: 'OK',
			message: 'Iterator current element.',
			content: {
				currentEl: iterator.getCurrent(),
			},
		});
	}
}
