import { DomainEvent } from '../events/domain-event'
import { DomainEvents } from '../events/domain-events'
import { Entity } from './entity'

/**
 * An abstract class that represents the root of an aggregate in DDD.
 * AggregateRoots are the main entry point for operations within an aggregate,
 * and they are responsible for handling domain events.
 */
export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvents: DomainEvent[] = []

  /**
   * Gets the domain events that have been raised but not yet dispatched.
   * @returns An array of DomainEvent instances.
   */
  get domainEvents(): DomainEvent[] {
    return this._domainEvents
  }

  /**
   * Adds a domain event to the internal list of events.
   * It also marks the aggregate instance for dispatch within the domain event system.
   * @param domainEvent The domain event to add.
   */
  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }

  /**
   * Clears all the domain events from the aggregate.
   * This is usually called after the events have been dispatched.
   */
  public clearEvents(): void {
    this._domainEvents = []
  }

  /**
   * Compares this aggregate root with another for equality.
   * @param other The other aggregate root to compare with.
   * @returns True if the aggregate roots are considered equal, false otherwise.
   */
  public equals(other: AggregateRoot<Props>): boolean {
    if (other === null || other === undefined) {
      return false
    }

    // Assuming 'id' is a property of Entity that holds a unique identifier
    return this.id.equals(other.id)
  }
}
