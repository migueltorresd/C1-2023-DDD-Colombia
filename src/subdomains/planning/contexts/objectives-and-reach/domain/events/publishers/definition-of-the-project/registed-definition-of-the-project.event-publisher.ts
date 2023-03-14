import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';

/**
 * Clase que publica el evento de registro de la definición de un proyecto
 *
 * @export
 * @abstract
 * @class RegistedDefinitionOfTheProjectEventPublisher // clase que publica el evento de registro de la definición de un proyecto
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de definición del proyecto
 */
export abstract class RegistedDefinitionOfTheProjectEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.RegistedDefinitionOfTheProjectEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
