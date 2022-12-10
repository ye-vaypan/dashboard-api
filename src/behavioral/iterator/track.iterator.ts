import { IteratorInterface } from './iterator.interface';
import { TrackEntity } from './track.entity';

export class TrackIterator implements IteratorInterface {
	private static instance: TrackIterator;
	private readonly tracks: TrackEntity[];
	private position: number;

	private constructor(tracks: TrackEntity[]) {
		this.tracks = tracks;
		this.position = 0;
	}

	static getTrackIterator(tracks: TrackEntity[]): TrackIterator {
		if (!this.instance) {
			this.instance = new TrackIterator(tracks);
		}
		return this.instance;
	}

	getCurrent(): TrackEntity {
		return this.tracks[this.position];
	}

	getCurrentPosition(): number {
		return this.position;
	}

	getNext(): TrackEntity {
		return this.tracks[++this.position];
	}

	hasNext(): boolean {
		return this.position < this.tracks.length - 1;
	}

	reset(): void {
		this.position = 0;
	}
}
