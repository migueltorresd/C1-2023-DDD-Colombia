import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';

/**
 * Clase que representa el publicador de eventos de obtención de la definición del proyecto
 *
 * @export
 * @abstract
 * @class DefinitionOfTheProjectObtainedEventPublisher
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de definición del proyecto
 */
export abstract class DefinitionOfTheProjectObtainedEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Response = DefinitionOfTheProjectDomainEntity>(): Promise<Response> {
    return this.emit(
      'planning.DefinitionOfTheProjectObtainedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
