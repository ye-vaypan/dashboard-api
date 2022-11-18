export class UserModel {
	private static users = [
		{
			name: 'John',
			role: 'admin',
			token: 'qwerty',
		},
		{
			name: 'Mary',
			role: 'manager',
			token: 'asdfgh',
		},
		{
			name: '',
			role: 'anonymous',
			token: '',
		},
	];

	static getUser(token: string): { name: string; token: string; role: string } {
		let user = this.users.find(function (userObject) {
			return userObject.token === token;
		});
		if (user === undefined) user = this.users[2];
		return user;
	}

	static getAllUsers(): { name: string; token: string; role: string }[] {
		return this.users;
	}
}
