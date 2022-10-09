import {Logger} from 'tslog';
import {LoggerInterface} from "./logger.interface";

export class LoggerService implements LoggerInterface{
    public logger: Logger;

    constructor() {
        this.logger = new Logger({
            displayInstanceName: false,
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false
        })
    }

    public log(...args: unknown[]) {
        this.logger.info(...args);
    }

    public error(...args: unknown[]) {
        this.logger.error(...args);
    }

    public warn(...args: unknown[]) {
        this.logger.warn(...args);
    }
}