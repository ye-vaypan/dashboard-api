import { ProductInterface } from './product.interface';
import { Product } from './product';

export class AuthUserForProduct implements ProductInterface {
	private product: ProductInterface;
	private user: any;

	constructor(product: Product, user: { name: string; token: string; role: string }) {
		this.product = product;
		this.user = user;
	}

	createProduct(): { code: number; msg: string; data: string } {
		if (this.user.role === 'manager' || this.user.role === 'admin') {
			return this.product.createProduct();
		}
		return {
			code: 403,
			msg: `Access denied for ${this.user.role}!`,
			data: '',
		};
	}

	deleteProduct(): { code: number; msg: string; data: string } {
		if (this.user.role === 'admin') {
			return this.product.deleteProduct();
		}
		return {
			code: 403,
			msg: `Access denied for ${this.user.role}!`,
			data: '',
		};
	}

	getProduct(): { code: number; msg: string; data: string } {
		return this.product.getProduct();
	}

	updateProduct(): { code: number; msg: string; data: string } {
		if (this.user.role === 'manager' || this.user.role === 'admin') {
			return this.product.updateProduct();
		}
		return {
			code: 403,
			msg: `Access denied for ${this.user.role}!`,
			data: '',
		};
	}
}
