import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';
/**
 * publicar el evento de estado aprobado editado
 *
 * @export
 * @abstract
 * @class StateApproveEditedEventPublisher // clase que publica el evento de estado aprobado editado
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de definición del proyecto
 */
export abstract class StateApproveEditedEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<result = any>(): Promise<result> {
    return this.emit(
      'planning.StateApproveEditedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
