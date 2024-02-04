import { type Either, left, right } from '../either';

function makeAction(action: boolean): Either<null, string> {
  if (action) return right('ok');
  else return left(null);
}
describe('Either', () => {
  describe('Left', () => {
    it('should create a Left instance with a value', () => {
      const result = makeAction(false);

      expect(result.isLeft()).toBeTruthy();
      expect(result.isRight()).toBeFalsy();
    });
  });

  describe('Right', () => {
    it('should create a Right instance with a value', () => {
      const result = makeAction(true);

      expect(result.isLeft()).toBeFalsy();
      expect(result.isRight()).toBeTruthy();
    });
  });
});
