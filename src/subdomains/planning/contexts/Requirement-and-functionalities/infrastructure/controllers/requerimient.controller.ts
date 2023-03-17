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
  /**
   * registrar requerimiento
   *
   * @param  data // datos del requerimiento
   * @param  context // contexto del requerimiento
   * @memberof RequerimientController
   */
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

  /**
   * registrar requerimiento
   *
   * @param {IncomingMessage} data // datos del requerimiento
   * @param {KafkaContext} context // contexto del requerimiento
   * @memberof RequerimientController // contexto del requerimiento
   */
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

  /**
   * registrar requerimiento
   *
   * @param data
   * @param context
   * @memberof RequerimientController
   */
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

  /**
   * registrar requerimiento editado
   *
   * @param data
   * @param context
   * @memberof RequerimientController
   */
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
