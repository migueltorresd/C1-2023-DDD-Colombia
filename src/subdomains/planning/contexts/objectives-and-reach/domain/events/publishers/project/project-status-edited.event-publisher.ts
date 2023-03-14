import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProjectDomainEntity } from '../../../entities/project.domain-entity';

/**
 * Clase que representa el publicador de eventos de edición de un estado de un proyecto
 *
 * @export
 * @abstract
 * @class ProjectStatusEditedEventPublisher // clase que representa el publicador de eventos de edición de un estado de un proyecto
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de proyecto
 */
export abstract class ProjectStatusEditedEventPublisher<
  Response = ProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<result = any>(): Promise<result> {
    return this.emit(
      'panning.project-status-edited',
      JSON.stringify(this.response),
    );
  }
}
