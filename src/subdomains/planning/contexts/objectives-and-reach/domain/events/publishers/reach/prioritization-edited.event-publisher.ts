import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ReachDomainEntity } from '../../../entities/reach.domain-entity';

export abstract class PrioritizationEditedEventPublisher<
  Response = ReachDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.PrioritizationEditedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
