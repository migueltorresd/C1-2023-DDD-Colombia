import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';

export abstract class ProjectDescriptionCreatedEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<result = any>(): Promise<result> {
    return this.emit(
      'panning.project-description-created',
      JSON.stringify(this.response),
    );
  }
}
