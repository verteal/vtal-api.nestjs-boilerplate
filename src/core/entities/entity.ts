import { UUID } from '@/domain/entities/value-objects/uuid.entity';

export class Entity<T> {
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
}
