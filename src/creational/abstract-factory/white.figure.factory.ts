import { ChessFigureFactoryInterface } from './chess.figure.factory.interface';
import { WhiteKingPersonage } from './white.king.personage';
import { QueenPersonageInterface } from './queen.personage.interface';
import { WhiteQueenPersonage } from './white.queen.personage';
import { KingPersonageInterface } from './king.personage.interface';

export class WhiteFigureFactory implements ChessFigureFactoryInterface {
	createKing(): KingPersonageInterface {
		return new WhiteKingPersonage();
	}

	createQueen(): QueenPersonageInterface {
		return new WhiteQueenPersonage();
	}
}
