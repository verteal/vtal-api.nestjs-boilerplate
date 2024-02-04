/**
 * Either type represents an operation that can either fail with an error (Left) or succeed with a value (Right).
 * Use this to express operations in your domain that have a distinct success or failure path.
 */
export type Either<L, R> = Left<L, R> | Right<L, R>;

/**
 * Represents a failure or error state with a value of type L.
 * Use this class to encapsulate error information or failure states in your application.
 */
export class Left<L, R> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isRight(): this is Right<L, R> {
    return false;
  }

  isLeft(): this is Left<L, R> {
    return true;
  }
}

/**
 * Represents a success state with a value of type R.
 * Use this class to encapsulate successful outcomes with the associated value.
 */
export class Right<L, R> {
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  isRight(): this is Right<L, R> {
    return true;
  }

  isLeft(): this is Left<L, R> {
    return false;
  }
}

/**
 * Factory function for creating a Left (error) value.
 * Use this function for creating new instances of Left in a more concise way.
 * @param value The error value of type L.
 * @returns An instance of Left containing the error value.
 */
export const left = <L, R>(value: L): Either<L, R> => new Left(value);

/**
 * Factory function for creating a Right (success) value.
 * Use this function for creating new instances of Right in a more concise way.
 * @param value The success value of type R.
 * @returns An instance of Right containing the success value.
 */
export const right = <L, R>(value: R): Either<L, R> => new Right(value);
