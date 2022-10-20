import { KingPersonageInterface } from './king.personage.interface';
import { QueenPersonageInterface } from './queen.personage.interface';

export interface ChessFigureFactoryInterface {
	createKing(): KingPersonageInterface;
	createQueen(): QueenPersonageInterface;
}
