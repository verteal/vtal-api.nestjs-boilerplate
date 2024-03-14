export abstract class Repository<T> {
  abstract create(item: T): Promise<void>
  abstract update(item: T): Promise<void>
  abstract findMany(): Promise<T>
  abstract findOne(id: string): Promise<T | null>
  abstract delete(item: T): Promise<void>
  abstract findWith(key: keyof T, value: string): Promise<T | null>
}
