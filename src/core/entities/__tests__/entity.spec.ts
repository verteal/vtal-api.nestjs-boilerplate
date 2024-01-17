import { randomUUID } from 'crypto';
import { Entity } from '../entity';
import { UUID } from '@/domain/entities/value-objects/uuid.entity';

describe('Entity', () => {
  it('creates an entity with a specific UUID', () => {
    const uuid = randomUUID();
    const entity = new Entity({}, uuid);

    expect(entity.id.toValue()).toBe(uuid);
  });

  it('creates an entity with a generated UUID when none is provided', () => {
    const entity = new Entity({});

    expect(entity.id).toBeInstanceOf(UUID);
  });

  it('ensures the entity id is immutable', () => {
    const uuid1 = randomUUID();
    const uuid2 = randomUUID();
    const entity = new Entity({}, uuid1);

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      entity.id = new UUID(uuid2);
    } catch (err) {
      // Expected to fail
    }

    expect(entity.id.toValue()).toBe(uuid1);
  });
});
