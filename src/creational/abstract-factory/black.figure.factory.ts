import { ChessFigureFactoryInterface } from './chess.figure.factory.interface';
import { BlackKingPersonage } from './black.king.personage';
import { QueenPersonageInterface } from './queen.personage.interface';
import { BlackQueenPersonage } from './black.queen.personage';
import { KingPersonageInterface } from './king.personage.interface';

export class BlackFigureFactory implements ChessFigureFactoryInterface {
	createKing(): KingPersonageInterface {
		return new BlackKingPersonage();
	}

	createQueen(): QueenPersonageInterface {
		return new BlackQueenPersonage();
	}
}
