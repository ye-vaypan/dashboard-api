import { BaseController } from '../../common/base.controller';
import { inject } from 'inversify';
import { TYPES } from '../../types';
import { LoggerInterface } from '../../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { UserConnectionRepository } from './user.connection.repository';
import { UserConnectionEntity } from './user.connection.entity';
import { DeviceStorage } from './device.storage';
import { UserConnections } from '../../../prisma/generated/client';

export class FlyweightController extends BaseController {
	constructor(
		@inject(TYPES.LoggerInterface) private loggerService: LoggerInterface,
		@inject(TYPES.UserConnectionRepository) private userConnectionRepository: UserConnectionRepository,
	) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/generate-data',
				method: 'post',
				func: this.generateData,
			},
			{
				path: '/get-all-rows',
				method: 'get',
				func: this.getAllRows,
			},
			{
				path: '/read-all-data',
				method: 'get',
				func: this.readDataFromDb,
			},
			{
				path: '/create-new-device',
				method: 'post',
				func: this.createNewDevice,
			},
		]);
	}

	async getAllRows({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const rows = await this.userConnectionRepository.getAll();
		this.ok(res, {
			status: 'OK',
			message: 'All rows from db',
			content: rows,
		});
	}

	async generateData({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		let rowsCount = 100;
		if (body.rowsCount) {
			rowsCount = body.rowsCount;
		}
		const browsers = ['Chrome', 'Safari', 'Opera', 'Mozilla'];
		const oss = ['Linux', 'Windows', 'MacOS'];
		const devices = ['desktop', 'mobile'];
		const countries = ['Ukraine', 'USA', 'Poland'];

		for (let i = 0; i < rowsCount; i++) {
			const newConnection = await this.userConnectionRepository.create(
				new UserConnectionEntity(
					browsers[Math.floor(Math.random() * browsers.length)],
					oss[Math.floor(Math.random() * oss.length)],
					devices[Math.floor(Math.random() * devices.length)],
					countries[Math.floor(Math.random() * countries.length)],
					this.getRandIp(),
				),
			);
		}

		this.ok(res, {
			status: 'OK',
			message: `${rowsCount} records generated`,
		});
	}

	async createNewDevice({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const deviceStorage = await this.initDevices();
		const newConnection = await this.userConnectionRepository.create(
			new UserConnectionEntity(body.browser, body.os, body.device, body.country, this.getRandIp()),
		);
		deviceStorage.addDevice(
			newConnection.id,
			newConnection.browser,
			newConnection.os,
			newConnection.device,
			newConnection.country,
			newConnection.ip,
		);

		this.ok(res, {
			status: 'OK',
			message: `New record created.`,
			content: {
				totalRowsInDb: await this.userConnectionRepository.getCount(),
				totalDevicesCount: deviceStorage.devices.length,
				deviceTypesCount: deviceStorage.deviceFactory.getTypesCount(),
			},
		});
	}

	async readDataFromDb({ body }: Request<{}, {}>, res: Response, next: NextFunction): Promise<void> {
		const connections = await this.userConnectionRepository.getAll();
		const deviceStorage = new DeviceStorage();
		connections?.forEach(function (connection: UserConnections) {
			deviceStorage.addDevice(
				connection.id,
				connection.browser,
				connection.os,
				connection.device,
				connection.country,
				connection.ip,
			);
		});

		this.ok(res, {
			status: 'OK',
			message: `New record created.`,
			content: {
				totalDevicesCount: deviceStorage.devices.length,
				deviceTypesCount: deviceStorage.deviceFactory.getTypesCount(),
			},
		});
	}

	private getRandIp(): string {
		return (
			Math.floor(Math.random() * 255) +
			1 +
			'.' +
			Math.floor(Math.random() * 255) +
			'.' +
			Math.floor(Math.random() * 255) +
			'.' +
			Math.floor(Math.random() * 255)
		);
	}

	private async initDevices(): Promise<DeviceStorage> {
		const connections = await this.userConnectionRepository.getAll();
		const deviceStorage = new DeviceStorage();
		connections?.forEach(function (connection: UserConnections) {
			deviceStorage.addDevice(
				connection.id,
				connection.browser,
				connection.os,
				connection.device,
				connection.country,
				connection.ip,
			);
		});

		return deviceStorage;
	}
}
