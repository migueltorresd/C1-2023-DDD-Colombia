import {
  ValueObjectErrorHandler,
  IUseCase,
  ValueObjectException,
} from '@sofka';
import {
  DefinitionOfTheProjectAggregate,
  EditDescripcionProjectHelper,
} from '../../../domain/aggregates/definition-of-the-project';
import { ProjectDescriptionEditedEventPublisher } from '../../../domain/events/publishers/definition-of-the-project/project-description-edited.event-publisher';
import { IEditProjectDescriptionCommand } from '../../../domain/interfaces/commands/edit-project-description.command';
import { IEditProjectDescriptionResponse } from '../../../domain/interfaces/responses/edit-project-description.response';
import { IDefinitionOfTheProjectDomainService } from '../../../domain/services/definition-of-the-project.domain-service';
import { DescriptionObjectValue } from '../../../domain/value-objects/Definition-the-project/description/description.value-object';

/**
 * 
 *
 * @export
 * @class ProjectDescriptionEditUseCase 
 * @extends {ValueObjectErrorHandler} // ValueObjectErrorHandler es una clase que permite manejar errores de value objects
 * @implements {IUseCase<IEditProjectDescriptionCommand, IEditProjectDescriptionResponse>} // IUseCase es una interfaz que permite manejar casos de uso
 */
export class ProjectDescriptionEditUseCase
  extends ValueObjectErrorHandler
  implements
    IUseCase<IEditProjectDescriptionCommand, IEditProjectDescriptionResponse>
{
  private readonly projectAggregate: DefinitionOfTheProjectAggregate;

  constructor(
    private readonly definitionoftheprojectService: IDefinitionOfTheProjectDomainService,
    private readonly projectDescriptionEditedEventPublisher: ProjectDescriptionEditedEventPublisher,
  ) {
    super();
    this.projectAggregate = new DefinitionOfTheProjectAggregate({
      definitionoftheprojectService,
      projectDescriptionEditedEventPublisher,
    });
  }

  /**
   * ejecuta el caso de uso
   *
   * @param {IEditProjectDescriptionCommand} command // comando para editar la descripcion del proyecto
   * @return {Promise<IEditProjectDescriptionResponse>} // respuesta del caso de uso
   * @memberof ProjectDescriptionEditUseCase // metodo que ejecuta el caso de uso
   */
  async execute(
    command: IEditProjectDescriptionCommand,
  ): Promise<IEditProjectDescriptionResponse> {
    const description = new DescriptionObjectValue(command.description);

    if (description.hasErrors() === true) {
      this.setErrors(description.getErrors());
    }

    if (this.hasErrors() === true) {
      throw new ValueObjectException(
        'Error al editar la descripción del proyecto',
        this.getErrors(),
      );
    }

    const respuesta = await EditDescripcionProjectHelper(
      command.definitionId,
      command.description,
      this.projectDescriptionEditedEventPublisher,
      this.definitionoftheprojectService,
    );

    return {
      success: true,
      data: respuesta,
    };
  }
}
