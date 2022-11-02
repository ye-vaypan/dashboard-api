import { StorageRepositoryInterface } from './storage.repository.interface';

export abstract class BaseRepository {
	repository: StorageRepositoryInterface;

	abstract getRepository(): StorageRepositoryInterface;
	abstract save(): void;
}
