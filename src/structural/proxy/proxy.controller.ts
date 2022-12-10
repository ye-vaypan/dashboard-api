import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { UserModel } from './user.model';
import { Product } from './product';
import { AuthUserForProduct } from './auth.user.for.data';

export class ProxyController extends BaseController {
	constructor(@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/get-data',
				method: 'get',
				func: this.getData,
			},
			{
				path: '/get-users',
				method: 'get',
				func: this.getUsers,
			},
			{
				path: '/create',
				method: 'post',
				func: this.createData,
			},
			{
				path: '/update',
				method: 'put',
				func: this.updateData,
			},
			{
				path: '/delete',
				method: 'delete',
				func: this.deleteData,
			},
		]);
	}

	async getData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const user = UserModel.getUser(body.token);
		const product = new Product();
		const authUserProduct = new AuthUserForProduct(product, user);
		const dProduct = authUserProduct.getProduct();
		this.send(res, dProduct.code, {
			message: dProduct.msg,
			data: dProduct.data,
		});
	}

	async createData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const user = UserModel.getUser(body.token);
		const product = new Product();
		const authUserProduct = new AuthUserForProduct(product, user);
		const dProduct = authUserProduct.createProduct();
		this.send(res, dProduct.code, {
			message: dProduct.msg,
			data: dProduct.data,
		});
	}

	async updateData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const user = UserModel.getUser(body.token);
		const product = new Product();
		const authUserProduct = new AuthUserForProduct(product, user);
		const dProduct = authUserProduct.updateProduct();
		this.send(res, dProduct.code, {
			message: dProduct.msg,
			data: dProduct.data,
		});
	}

	async deleteData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const user = UserModel.getUser(body.token);
		const product = new Product();
		const authUserProduct = new AuthUserForProduct(product, user);
		const dProduct = authUserProduct.deleteProduct();
		this.send(res, dProduct.code, {
			message: dProduct.msg,
			data: dProduct.data,
		});
	}

	async getUsers({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, {
			status: 'OK',
			message: `All users.`,
			content: UserModel.getAllUsers(),
		});
	}
}
