import {
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '@sofka';
import { DefinitionOfTheProjectAggregate } from '../../../domain/aggregates/definition-of-the-project';
import { ProjectObtainedEventPublisher } from '../../../domain/events/publishers/project/project-obtained.event-publisher';
import { IGetDefinitionOfTheProjectCommand } from '../../../domain/interfaces/commands/get-definition-of-the-Project.command';
import { IGetDefinitionOfTheProjectResponse } from '../../../domain/interfaces/responses/get-definition-of-the-Project.response';
import { IDefinitionOfTheProjectDomainService } from '../../../domain/services/definition-of-the-project.domain-service';
import { DefinitionProjectIdValueObject } from '../../../domain/value-objects/Definition-the-project/definition-project-id/definition-project-id.value-object';
import { ProjectIdValueObject } from '../../../domain/value-objects/proyect/project-id/project-id.value-object';

/**
 * caso de uso para obtener la definicion del proyecto
 *
 * @export
 * @class GetDefinitionOfTheProjectCase
 * @extends {ValueObjectErrorHandler} // ValueObjectErrorHandler es una clase que permite manejar errores de value objects
 * @implements {IUseCase<IGetDefinitionOfTheProjectCommand, IGetDefinitionOfTheProjectResponse>} // IUseCase es una interfaz que permite manejar casos de uso
 */
export class GetDefinitionOfTheProjectCase
  extends ValueObjectErrorHandler
  implements
    IUseCase<
      IGetDefinitionOfTheProjectCommand,
      IGetDefinitionOfTheProjectResponse
    >
{
  private readonly projectAggregate: DefinitionOfTheProjectAggregate;

  constructor(
    private readonly definitionoftheprojectService: IDefinitionOfTheProjectDomainService,
    private readonly projectObtainedEventPublisher: ProjectObtainedEventPublisher,
  ) {
    super();
    this.projectAggregate = new DefinitionOfTheProjectAggregate({
      definitionoftheprojectService,
      definitionOfTheProjectObtainedEventPublisher:
        projectObtainedEventPublisher,
    });
  }

  /**
   * ejecuta el caso de uso
   *
   * @param {IGetDefinitionOfTheProjectCommand} command // comando para obtener la definicion del proyecto
   * @return {Promise<IGetDefinitionOfTheProjectResponse>} // respuesta del caso de uso
   * @memberof GetDefinitionOfTheProjectCase // metodo que ejecuta el caso de uso
   */
  async execute(
    command: IGetDefinitionOfTheProjectCommand,
  ): Promise<IGetDefinitionOfTheProjectResponse> {
    const definitionId = new DefinitionProjectIdValueObject(
      command.definitionId,
    );

    if (definitionId.hasErrors() === true) {
      this.setErrors(definitionId.getErrors());
    }
    if (this.hasErrors() === true) {
      throw new ValueObjectException(
        'Error al obtener el proyecto',
        this.getErrors(),
      );
    }

    const respuesta = await this.projectAggregate.getDefinitionOfTheProject(
      definitionId.value,
    );
    return {
      succes: true,
      data: respuesta,
    };
  }
}
