import { UUID } from '@/shared/domain/value-objects/uuid.entity';

export abstract class Entity<T> {
  private _id: UUID;
  protected props: T;

  /**
   * Gets the entity's ID
   * @returns {UUID} The UUID of the entity
   */
  get id(): UUID {
    return this._id;
  }

  /**
   * Constructs a new Entity
   * @param props The properties of the entity
   * @param id An optional UUID string for the entity. If not provided, a new UUID will be generated
   */
  constructor(props: T, id?: UUID) {
    this.props = props;
    this._id = id ?? new UUID();
  }

  /**
   * Compares this entity with another entity for equality.
   * Two entities are considered equal if they are the same instance or have the same ID.
   * @param entity The entity to compare with.
   * @returns {boolean} True if the entities are considered equal; otherwise, false.
   */
  public equals(entity: Entity<unknown>) {
    if (entity === this) return true;

    if (entity.id === this._id) return true;

    return false;
  }
}
