import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ReachDomainEntity } from '../../../entities/reach.domain-entity';

/**
 * Clase que representa el publicador de eventos de edición de una definición de alcance
 *
 * @export
 * @abstract
 * @class EditedReachDefinitionEventPublisher // clase que representa el publicador de eventos de edición de una definición de alcance
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de alcance
 */
export abstract class EditedReachDefinitionEventPublisher<
  Response = ReachDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Response = ReachDomainEntity>(): Promise<Response> {
    return this.emit(
      'planning.EditedReachDefinitionEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
