import { SorterInterface } from './sorter.interface';
import { Student } from './student';

export class StudentMarkDesc implements SorterInterface {
	sort(data: Student[]): Student[] {
		return data.sort((obj1, obj2) => {
			if (obj1.mark > obj2.mark) {
				return -1;
			} else if (obj1.mark < obj2.mark) {
				return 1;
			}
			if (obj1.name > obj2.name) {
				return 1;
			} else if (obj1.name < obj2.name) {
				return -1;
			}
			return 0;
		});
	}
}
