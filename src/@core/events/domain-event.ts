import { UUID } from '@/@core/entities/uuid.entity'

export interface DomainEvent {
  ocurredAt: Date
  getAggregateId(): UUID
}
