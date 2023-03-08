import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ReachDomainEntity } from '../../../entities/reach.domain-entity';

export abstract class EditedReachDefinitionEventPublisher<
  Response = ReachDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Response = ReachDomainEntity>(): Promise<Response> {
    return this.emit(
      'planning.EditedReachDefinitionEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
