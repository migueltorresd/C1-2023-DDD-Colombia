import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProjectDomainEntity } from '../../../entities/project.domain-entity';

/**
 * publicar el evento de nombre editado
 *
 * @export
 * @abstract
 * @class NameEditedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class NameEditedEventPublisher<
  Response = ProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.NameEditedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
