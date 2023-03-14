import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProjectDomainEntity } from '../../../entities/project.domain-entity';

/**
 * Clase que representa el publicador de eventos de creación de un proyecto
 *
 * @export
 * @abstract
 * @class ProjectCreatedEventPublisher // clase que representa el publicador de eventos de creación de un proyecto
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de proyecto
 */
export abstract class ProjectCreatedEventPublisher<
  Response = ProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.ProjectCreatedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
