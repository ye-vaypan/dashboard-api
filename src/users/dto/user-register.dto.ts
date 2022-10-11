import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsNotEmpty()
	@IsEmail({}, { message: 'Incorrect email format' })
	email: string;
	@IsNotEmpty({ message: 'Password can not be empty' })
	@IsString({ message: 'Password can not be empty' })
	password: string;
	@IsNotEmpty({ message: 'Name can not be empty' })
	@IsString({ message: 'Name can not be empty' })
	name: string;
}
