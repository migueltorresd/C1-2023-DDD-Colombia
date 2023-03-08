import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ReachDomainEntity } from '../../../entities/reach.domain-entity';

export abstract class EditedStateDefinitionEventPublisher<
  Response = ReachDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Response = ReachDomainEntity>(): Promise<Response> {
    return this.emit(
      'planning.EditedStateDefinitionEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
