import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProjectDomainEntity } from '../../../entities/project.domain-entity';

/**
 * publicar el evento de nombre editado
 *
 * @export
 * @abstract
 * @class NameEditedEventPublisher // clase que publica el evento de edición de un nombre
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de proyecto
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
