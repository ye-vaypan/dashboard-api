export class DbService {
	private static instance: DbService;
	private user = {
		email: 'john.doe@mail.com',
		key: 'UserSLAFJHNASFJGVMKFVMJFNVJN',
		secret: 'UserSLAFJHNASFJGVMKFVMJFNVJN',
	};

	private constructor() {}

	public static getInstance(): DbService {
		if (!this.instance) {
			this.instance = new DbService();
		}
		return this.instance;
	}

	findUser(email: string): any {
		if (this.user.email === email) {
			return this.user;
		} else return undefined;
	}

	store(user: any, serviceUserKeys: object): any {
		return {
			email: 'john.doe@mail.com',
			key: 'UserSLAFJHNASFJGVMKFVMJFNVJN',
			secret: 'UserSLAFJHNASFJGVMKFVMJFNVJN',
		};
	}
}
