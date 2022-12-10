import { IterableInterface } from './iterable.interface';
import { TrackIterator } from './track.iterator';
import { TrackEntity } from './track.entity';
import { IteratorInterface } from './iterator.interface';

export class TrackCollection implements IterableInterface {
	private static instance: TrackCollection;
	private tracks: TrackEntity[];

	private constructor() {
		this.tracks = [];
	}

	addToCollection(track: TrackEntity): void {
		this.tracks.push(track);
	}

	static getCollection(): TrackCollection {
		if (!this.instance) {
			this.instance = new TrackCollection();
		}
		return this.instance;
	}

	createIterator(): IteratorInterface {
		return TrackIterator.getTrackIterator(this.tracks);
	}
}
