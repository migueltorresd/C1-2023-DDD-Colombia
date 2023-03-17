import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { IncomingMessage } from 'http';

/**
 * controlador de requerimientos y funcionalidades
 *
 * @export
 * @class RequerimientController
 */
@Controller()
export class RequerimientController {
  @EventPattern('planning.RegistedDefinitionOfTheProjectEventPublisher')
  definitionsProject(@Payload() data: any, @Ctx() context: KafkaContext) {
    console.log('aqui esta la sub');
    console.log(data, context);
  }

  @EventPattern('planning.RegistedDefinitionOfTheProjectEventPublisher')
  getCreatedItem(@Payload() data: any, @Ctx() context: KafkaContext) {
    console.log(data, context, 'Created Item');
  }

  @EventPattern('planning.ProjectObtainedEventPublisher')
  obtainedProject(
    @Payload() data: IncomingMessage,
    @Ctx() context: KafkaContext,
  ) {
    console.log(data, context);
  }

  @EventPattern('planning.DefinitionOfTheProjectObtainEventPublisher')
  obtenerDefinicionProyecto(
    @Payload() data: IncomingMessage,
    @Ctx() context: KafkaContext,
  ) {
    console.log(data, context);
  }

  @EventPattern('planning.ProjectDescriptionEditedEventPublisher')
  descriptionEdited(
    @Payload() data: IncomingMessage,
    @Ctx() context: KafkaContext,
  ) {
    console.log(data, context);
  }
}
