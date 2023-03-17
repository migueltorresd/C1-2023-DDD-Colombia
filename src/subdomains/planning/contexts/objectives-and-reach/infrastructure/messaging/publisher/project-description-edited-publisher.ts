import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from '@sofka';
import { ProjectDescriptionEditedEventPublisher } from '../../../domain/events/publishers/definition-of-the-project/project-description-edited.event-publisher';

/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class ProjectDescriptionEditedPublisher
 * @extends {ProjectDescriptionEditedEventPublisher}
 */
export class ProjectDescriptionEditedPublisher extends ProjectDescriptionEditedEventPublisher {
  constructor(
    @Inject('DEFINICION_DE_PROYECTO') private readonly proxy: ClientProxy,
  ) {
    super(proxy as unknown as IEventPublisher);
  }
}
