import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

import { authMessage, baseResponse } from '../../common';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  /**
   * @fileoverview It catches any HttpException thrown by
   * the application and returns a generic response object with
   * the exception message
   * @param {HttpException} exception - HttpException - The exception that was thrown
   * @param {ArgumentsHost} host - ArgumentsHost - This is the host of the current request.
   * @returns A generic response object with a status code and a message.
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const message =
      exception.getResponse()['message'] === 'Forbidden resource'
        ? authMessage.notPermission
        : exception.getResponse()['message'];

    const resp = baseResponse({
      success: false,
      message: Array.isArray(exception.getResponse()['message'])
        ? exception.getResponse()['message'][0]
        : message,
    });

    return response.status(status).json(resp);
  }
}
