import { isEqual } from 'lodash'

/**
 * Represents a Value Object for attribute-based comparison
 * Usage: Extend for specific value objects and use `equals` to compare instances
 */

export class ValueObject {
  /**
   * Compares for attribute equality
   * @param value The Value Object to compare
   * @returns `true` if objects have the same value, `false` otherwise
   */
  public equals(value: this): boolean {
    if (value === null || value === undefined) {
      return false
    }

    if (value.constructor.name !== this.constructor.name) {
      return false
    }

    return isEqual(value, this)
  }
}
