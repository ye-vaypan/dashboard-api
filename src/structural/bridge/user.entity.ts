import { compare, hash } from 'bcrypt';
import { BaseEntity } from './base.entity';

export class User extends BaseEntity {
	private _password: string;

	constructor(private readonly _email: string, private readonly _name: string, passwordHash?: string) {
		super();
		if (passwordHash) {
			this._password = passwordHash;
		}
	}

	get email(): string {
		return this._email;
	}

	get name(): string {
		return this._name;
	}

	get password(): string {
		return this._password;
	}

	public async setPassword(pass: string, salt: number): Promise<void> {
		this._password = await hash(pass, salt);
	}

	public async comparePassword(pass: string): Promise<boolean> {
		return compare(pass, this._password);
	}
}
