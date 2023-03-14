import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ReachDomainEntity } from '../../../entities/reach.domain-entity';

/**
 * Clase que representa el publicador de eventos de edición de una priorización
 *
 * @export
 * @abstract
 * @class PrioritizationEditedEventPublisher // clase que representa el publicador de eventos de edición de una priorización
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de alcance
 */
export abstract class PrioritizationEditedEventPublisher<
  Response = ReachDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.PrioritizationEditedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
