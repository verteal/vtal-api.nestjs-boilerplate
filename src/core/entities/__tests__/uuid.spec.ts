import { UUID } from '../uuid.entity';

describe('UUID Entity', () => {
  it('should generate a new UUID if no value is provided', () => {
    const id = new UUID();

    expect(id.toString()).toBeDefined();
  });
});
