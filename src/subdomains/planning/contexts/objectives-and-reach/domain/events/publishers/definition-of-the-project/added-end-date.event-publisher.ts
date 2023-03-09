import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';

/**
 * Clase que representa el publicador de eventos de agregación de fecha de finalización
 *
 * @export
 * @abstract
 * @class AddedEndDateEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class AddedEndDateEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.AddedEndDateEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
