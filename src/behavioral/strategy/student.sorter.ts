import { SorterInterface } from './sorter.interface';
import { Student } from './student';

export class StudentSorter {
	private sorter: SorterInterface;

	public setSorter(sorter: SorterInterface): void {
		this.sorter = sorter;
	}

	public buildReport(data: Student[]): Student[] {
		return this.sorter.sort(data);
	}
}
