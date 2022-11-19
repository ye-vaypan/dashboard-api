import { IsNotEmpty, IsString } from 'class-validator';

export class UserUpdateDto {
	@IsString({ message: 'Name can not be empty' })
	password: string;
	@IsString({ message: 'Name can not be empty' })
	name: string;
}
