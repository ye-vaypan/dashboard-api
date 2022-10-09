import {NextFunction, Request, Response} from "express";
import {LoggerService} from "../logger/logger.service";
import {ExceptionFilterInterface} from "./exception.filter.interface";
import {HttpError} from "./http-error";

export class ExceptionFilter implements ExceptionFilterInterface{

    logger: LoggerService;

    constructor(logger: LoggerService) {
        this.logger = logger;
    }

    catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
        if (err instanceof HttpError){
            this.logger.error(`[${err.context}] Code:${err.statusCode} : ${err.message}`)
            res.status(err.statusCode).json({
                "status": "ERROR",
                "message": "Error is occurred.",
                "content": {
                    "title": "Something went wrong...!",
                    "code": err.statusCode
                }
            })
        } else {
            this.logger.error(`${err.message}`)
            res.status(500).json({
                "status": "ERROR",
                "message": "Error is occurred.",
                "content": {
                    "title": "Something went wrong...!",
                    "code": 500
                }
            })
        }
    }
}