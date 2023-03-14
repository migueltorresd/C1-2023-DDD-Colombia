import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { DefinitionOfTheProjectDomainEntity } from '../../../entities/definition-of-the-project.domain-entity';

/**
 * Clase que publica el evento de creación de un proyecto
 *
 * @export
 * @abstract
 * @class ProjectDescriptionCreatedEventPublisher // clase que publica el evento de creación de un proyecto
 * @extends {EventPublisherBase<Response>} // extiende de la clase base de publicador de eventos
 * @template Response // extiende de la respuesta de la entidad de dominio de definición del proyecto
 */
export abstract class ProjectDescriptionCreatedEventPublisher<
  Response = DefinitionOfTheProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<result = any>(): Promise<result> {
    return this.emit(
      'panning.project-description-created',
      JSON.stringify(this.response),
    );
  }
}
