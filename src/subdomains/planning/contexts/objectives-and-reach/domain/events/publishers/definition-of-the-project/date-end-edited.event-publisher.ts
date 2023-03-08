import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';

export abstract class DateEndEditedEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Response = DefinitionOfTheProjectDomainEntity>(): Promise<Response> {
    return this.emit(
      'planning.DateEndEditedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
