export interface StorageServiceInterface {
	storeFile(file: string, path: string): string;
	getFile(fileId: string): string;
}
