import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from '@sofka';
import { ProjectObtainedEventPublisher } from '../../../domain/events/publishers/project/project-obtained.event-publisher';

/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class ProjectObtainedPublisher
 * @extends {ProjectObtainedEventPublisher}
 */
export class ProjectObtainedPublisher extends ProjectObtainedEventPublisher {
  constructor(
    @Inject('DEFINICION_DE_PROYECTO') private readonly proxy: ClientProxy,
  ) {
    super(proxy as unknown as IEventPublisher);
  }
}
