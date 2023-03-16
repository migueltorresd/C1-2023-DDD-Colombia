import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from '@sofka';
import { lastValueFrom } from 'rxjs';
import { DefinitionOfTheProjectDomainEntity } from '../../../domain/entities/definition-of-the-project.domain-entity';
import { RegistedDefinitionOfTheProjectEventPublisher } from '../../../domain/events/publishers/definition-of-the-project/registed-definition-of-the-project.event-publisher';
import { DefinitionOfTheProjectEntity } from '../../persistence/entities/definition-of-the-project.entity';

/**
 * Clase que publica el evento de registro de la definición de un proyecto
 *
 * @export
 * @abstract
 * @class RegistedDefinitionOfTheProjectPublisher
 * @extends {RegistedDefinitionOfTheProjectEventPublisher<DefinitionOfTheProjectEntity>} // extiende de la clase base de publicador de eventos
 */
export class RegistedDefinitionOfTheProjectPublisher extends RegistedDefinitionOfTheProjectEventPublisher {
  constructor(
    @Inject('DEFINICION_DE_PROYECTO') private readonly proxy: ClientProxy,
  ) {
    super(proxy as unknown as IEventPublisher);
  }

  /**
   * Método que publica el evento de registro de la definición de un proyecto
   *
   * @template Result // extiende de la respuesta de la entidad de dominio de definición del proyecto
   * @template Input // extiende de la entidad de dominio de definición del proyecto
   * @param  pattern // patrón de publicación
   * @param {Input} data // datos de la entidad de dominio de definición del proyecto
   * @return {Promise<Result>} // retorna una promesa con la respuesta de la entidad de dominio de definición del proyecto
   * @memberof RegistedDefinitionOfTheProjectPublisher // clase que publica el evento de registro de la definición de un proyecto
   */
  emit<Result = any, Input = DefinitionOfTheProjectEntity>(
    pattern: any,
    data: Input,
  ): Promise<Result> {
    return lastValueFrom(this.proxy.emit(pattern, data));
  }
}
