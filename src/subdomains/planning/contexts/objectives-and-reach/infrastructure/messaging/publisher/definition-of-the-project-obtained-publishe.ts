import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from '@sofka';
import { DefinitionOfTheProjectObtainedEventPublisher } from '../../../domain/events/publishers/definition-of-the-project/definition-of-the-project-obtained.event-publisher';

export class DefinitionOfTheProjectObtainPublisher extends DefinitionOfTheProjectObtainedEventPublisher {
  constructor(
    @Inject('DEFINICION_DE_PROYECTO') private readonly proxy: ClientProxy,
  ) {
    super(proxy as unknown as IEventPublisher);
  }
}
