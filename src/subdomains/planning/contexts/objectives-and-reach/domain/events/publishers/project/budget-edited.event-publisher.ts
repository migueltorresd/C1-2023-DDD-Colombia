import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProjectDomainEntity } from '../../../entities/project.domain-entity';

/**
 * Clase que representa el publicador de eventos de edición de un presupuesto
 *
 * @export
 * @abstract
 * @class BudgetEditedEventPublisher // clase que representa el publicador de eventos de edición de un presupuesto
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de proyecto
 */
export abstract class BudgetEditedEventPublisher<
  Response = ProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.BudgetEditedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
