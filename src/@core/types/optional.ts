/**
 * A TypeScript utility type to create a new type with a subset of properties from an existing type.
 *
 * @type Optional<T, K>
 *
 * @template T The original type.
 * @template K The keys of `T` that should be made optional.
 *
 * This type combines two operations:
 * 1. `Pick<Partial<T>, K>`: Creates a type with properties `K` from `T`, and makes them optional.
 * 2. `Omit<T, K>`: Creates a type with all properties from `T` except those specified in `K`.
 *
 * The combination of these two results in a type where the properties specified in `K` are optional,
 * while the rest of the properties from `T` remain as they are (either optional or required).
 *
 * Usage:
 * Suppose you have a type `User`:
 *
 * type User = {
 *   name: string;
 *   email: number;
 *   createdAt: string;
 * };
 *
 * And you want to create a type where `createdAt` is optional, but the rest of the properties are required,
 * you can use the `Optional` type:
 *
 * type UserWithOptionalCreatedAt = Optional<User, 'createdAt'>;
 *
 * Now, `UserWithOptionalCreatedAt` will have required `name` and `email` fields, but `createdAt` will be optional.
 */

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
