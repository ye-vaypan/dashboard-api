import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDto {
	@IsNotEmpty()
	@IsEmail({}, { message: 'Incorrect email format' })
	email: string;
	@IsNotEmpty({ message: 'password can not be empty' })
	@IsString({ message: 'Name can not be empty' })
	password: string;
}
