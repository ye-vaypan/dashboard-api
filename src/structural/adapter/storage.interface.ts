export interface StorageInterface {
	storeFile(file: string, path: string, newName?: string, overwrite?: boolean): string;
	getFileUrl(fileId: string): string;
	listStoredFileIds(): string[];
}
