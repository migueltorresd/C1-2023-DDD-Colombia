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
  definitionsProject(@Payload() data: any, @Ctx() context: any) {
    console.log(
      '-------------------------definitionsProject--------------------------',
    );
    console.log('data', data);
    console.log('contex', context);
    console.log(
      '-------------------------definitionsProject--------------------------',
    );
  }

  @EventPattern('planning.ProjectObtainedEventPublisher')
  obtainedProject(
    @Payload() data: IncomingMessage,
    @Ctx() context: KafkaContext,
  ) {
    console.log(
      '-------------------------obtainedProject--------------------------',
    );
    console.log(data, context);
    console.log(
      '-------------------------obtainedProject--------------------------',
    );
  }

  @EventPattern('planning.DefinitionOfTheProjectObtainedEventPublisher')
  obtenerDefinicionProyecto(@Payload() data: any, @Ctx() context: any) {
    console.log(
      '-------------------------obtenerDefinicionProyecto-------------------------',
    );
    console.log(data, context);
    console.log(
      '-------------------------obtenerDefinicionProyecto--------------------------',
    );
  }

  @EventPattern('panning.project-description-edited')
  descriptionEdited(@Payload() data: any, @Ctx() context: any) {
    console.log(
      '------------------------- descriptionEdited--------------------------',
    );
    console.log(data, context);
    console.log(
      '------------------------- descriptionEdited--------------------------',
    );
  }
}
