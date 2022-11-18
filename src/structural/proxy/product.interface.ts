export interface ProductInterface {
	getProduct(): { code: number; msg: string; data: string };
	createProduct(): { code: number; msg: string; data: string };
	updateProduct(): { code: number; msg: string; data: string };
	deleteProduct(): { code: number; msg: string; data: string };
}
