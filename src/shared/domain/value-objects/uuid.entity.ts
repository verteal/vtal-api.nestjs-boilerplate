import { randomUUID } from 'node:crypto';

import { ValueObject } from './value-object.entity';

/**
 * Represents a UUID as a value object.
 */
export class UUID extends ValueObject {
  private readonly value: string;

  constructor(value?: string) {
    super();
    this.value = value ?? randomUUID();
  }

  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  /**
   * Checks equality based on the UUID value.
   * @param id The UUID to compare with.
   */
  public equals(id: UUID) {
    return id.toValue() === this.value;
  }
}
