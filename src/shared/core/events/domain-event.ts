import { UUID } from '@/shared/domain/value-objects/uuid.entity';

export interface DomainEvent {
  ocurredAt: Date;
  getAggregateId(): UUID;
}
