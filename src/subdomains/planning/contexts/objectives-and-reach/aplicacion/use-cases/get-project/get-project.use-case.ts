import {
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from 'src/shared/sofka';
import { DefinitionOfTheProjectAggregate } from '../../../domain/aggregates/definition-of-the-project/definition-of-the-project.aggregate';
import { ProjectObtainedEventPublisher } from '../../../domain/events/publishers/project/project-obtained.event-publisher';
import { IGetProjectCommand } from '../../../domain/interfaces/commands/get-project.command';
import { IGetProjectResponse } from '../../../domain/interfaces/responses/get-project.response';
import { IProjectDomainService } from '../../../domain/services/proyect.domain-service';
import { BudgetObjectValue } from '../../../domain/value-objects/proyect/budget/budget.value-object';
import { NameObjectValue } from '../../../domain/value-objects/proyect/name/name.value-object';
import { ProjectIdValueObject } from '../../../domain/value-objects/proyect/project-id/project-id.value-object';
import { StateApproveObjectValue } from '../../../domain/value-objects/proyect/state-approve/state-approve.value-object';

/**
 * Caso de uso para obtener un proyecto
 *
 * @export
 * @class GetProjectUseCase
 * @extends {ValueObjectErrorHandler} // se extiende para poder manejar los errores de los value objects
 * @implements {IUseCase<IGetProjectCommand, IGetProjectResponse>} // se implementa para poder usar el metodo execute
 */
export class GetProjectUseCase
  extends ValueObjectErrorHandler
  implements IUseCase<IGetProjectCommand, IGetProjectResponse>
{
  private readonly projectAggregate: DefinitionOfTheProjectAggregate;

  constructor(
    private readonly projectService: IProjectDomainService,
    private readonly projectObtainedEventPublisher: ProjectObtainedEventPublisher,
  ) {
    super();
    this.projectAggregate = new DefinitionOfTheProjectAggregate({
      projectService,
      projectObtainedEventPublisher,
    });
  }
  /**
   * Metodo para ejecutar el caso de uso
   *
   * @param {IGetProjectCommand} command // comando para obtener un proyecto
   * @return {Promise<IGetProjectResponse>} // respuesta del caso de uso
   * @memberof GetProjectUseCase // se implementa para poder usar el metodo execute
   */
  async execute(command: IGetProjectCommand): Promise<IGetProjectResponse> {
    const projectId = new ProjectIdValueObject(command.projectId);

    if (projectId.hasErrors() === true) {
      this.setErrors(projectId.getErrors());
    }
    // se valida si hay errores en los value objects
    if (this.hasErrors() === true) {
      throw new ValueObjectException(
        'Error al obtener el proyecto',
        this.getErrors(),
      );
    }

    const respuesta = await this.projectAggregate.getProjectById(
      projectId.value,
    );
    return {
      succes: true,
      data: respuesta,
    };
  }
}
