export class WasabiStorageClient {
	private role: string;
	constructor(options: any) {
		if (options.key === 'UserSLAFJHNASFJGVMKFVMJFNVJN') this.role = 'user';
		else this.role = 'ADMIN';
	}

	store(file: string, path: string): string {
		return 'Id of stored file saved by ' + this.role;
	}

	get(fileId: string): string {
		return 'Return stored file content';
	}

	createHomeDir(remoteUser: any, email: string): void {
		//do something;
	}

	updatePolicies(remoteUser: any, strings: string[]): void {
		//do something;
	}
}
