import { ValueObject } from '../value-object.entity'

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super()
  }
}

describe('Value Object Entity', () => {
  it('should return true for two identical value objects', () => {
    const valObj1 = new StringValueObject('test')
    const valObj2 = new StringValueObject('test')

    expect(valObj1.equals(valObj2)).toBeTruthy()
  })

  it('should return false for two identical value objects', () => {
    const valObj1 = new StringValueObject('test')
    const valObj2 = new StringValueObject('test, but different')

    expect(valObj1.equals(valObj2)).toBeFalsy()
  })

  it('should return false when compared with null/undefined', () => {
    const valObj1 = new StringValueObject('test')

    expect(valObj1.equals(null)).toBeFalsy()
    expect(valObj1.equals(undefined)).toBeFalsy()
  })
})
