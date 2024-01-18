import { UUID } from '@/domain/entities/value-objects/uuid.entity';

import { Entity } from '../entity';

describe('Entity', () => {
  it('creates an entity with a specific UUID', () => {
    const uuid = new UUID();
    const entity = new Entity({}, uuid);

    expect(entity.id.toValue()).toBe(uuid.toValue());
  });

  it('creates an entity with a generated UUID when none is provided', () => {
    const entity = new Entity({});

    expect(entity.id).toBeInstanceOf(UUID);
  });

  it('ensures the entity id is immutable', () => {
    const uuid1 = new UUID();
    const uuid2 = new UUID();
    const entity = new Entity({}, uuid1);

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      entity.id = new UUID(uuid2);
    } catch (err) {
      // Expected to fail
    }

    expect(entity.id.toValue()).toBe(uuid1.toValue());
  });
});
