import { Student } from './student';

export interface SorterInterface {
	sort(data: Student[]): Student[];
}
