import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProjectDomainEntity } from '../../../entities/project.domain-entity';

/**
 * Clase que representa el publicador de eventos de obtención de un proyecto
 *
 * @export
 * @abstract
 * @class ProjectObtainedEventPublisher
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de proyecto
 */
export abstract class ProjectObtainedEventPublisher<
  Response = ProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'planning.ProjectObtainedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
