import { ProductInterface } from './product.interface';

export class Product implements ProductInterface {
	createProduct(): { code: number; msg: string; data: string } {
		return {
			code: 201,
			data: 'Newly created product data...',
			msg: 'New product was created',
		};
	}

	deleteProduct(): { code: number; msg: string; data: string } {
		return {
			code: 201,
			data: '',
			msg: 'Product was deleted',
		};
	}

	getProduct(): { code: number; msg: string; data: string } {
		return {
			code: 200,
			data: 'Some product data...',
			msg: 'Product data view',
		};
	}

	updateProduct(): { code: number; msg: string; data: string } {
		return {
			code: 201,
			data: 'Some product data...',
			msg: 'Product was Updated',
		};
	}
}
