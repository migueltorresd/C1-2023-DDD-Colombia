import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';

/**
 * Clase que publica el evento de edición de la descripción de un proyecto
 *
 * @export
 * @abstract
 * @class ProjectDescriptionEditedEventPublisher // clase que publica el evento de edición de la descripción de un proyecto
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de definición del proyecto
 */
export abstract class ProjectDescriptionEditedEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<result = any>(): Promise<result> {
    return this.emit(
      'panning.project-description-edited',
      JSON.stringify(this.response),
    );
  }
}
