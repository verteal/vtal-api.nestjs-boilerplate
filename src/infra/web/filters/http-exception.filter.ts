import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException as NestHttpException,
} from '@nestjs/common'
import type { Response } from 'express'

@Catch(NestHttpException)
export class HttpException implements ExceptionFilter {
  catch(exception: NestHttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()

    const message =
      typeof exceptionResponse === 'object'
        ? (exceptionResponse as NestHttpException).message
        : exceptionResponse

    response.status(status).json({
      success: false,
      result: {
        statusCode: status,
        message,
      },
    })
  }
}
