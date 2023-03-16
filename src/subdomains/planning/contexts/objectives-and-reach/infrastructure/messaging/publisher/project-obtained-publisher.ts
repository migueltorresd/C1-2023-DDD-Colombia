import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from '@sofka';
import { ProjectObtainedEventPublisher } from '../../../domain/events/publishers/project/project-obtained.event-publisher';

export class ProjectObtainedPublisher extends ProjectObtainedEventPublisher {
  constructor(
    @Inject('DEFINICION_DE_PROYECTO') private readonly proxy: ClientProxy,
  ) {
    super(proxy as unknown as IEventPublisher);
  }
}
