import { Either, left, right } from '@/@core/either'

export abstract class UseCase<Request, Response, ErrorType = Error> {
  async execute(request: Request): Promise<Either<ErrorType, Response>> {
    try {
      return right(await this.action(request))
    } catch (error) {
      return left(error as ErrorType)
    }
  }

  protected abstract action(request: Request): Promise<Response>
}
