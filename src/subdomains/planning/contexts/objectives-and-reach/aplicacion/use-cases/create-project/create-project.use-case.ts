import {
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '@sofka';
import { DefinitionOfTheProjectAggregate } from '../../../domain/aggregates/definition-of-the-project/definition-of-the-project.aggregate';
import { RegistedDefinitionOfTheProjectEventPublisher } from '../../../domain/events/publishers/definition-of-the-project/registed-definition-of-the-project.event-publisher';
import { ICreateProjecCommand } from '../../../domain/interfaces/commands/create-project.command';
import { ICreateProjectResponse } from '../../../domain/interfaces/responses/project-created.response';
import { IDefinitionOfTheProjectDomainService } from '../../../domain/services/definition-of-the-project.domain-service';
import { DateEndObjectValue } from '../../../domain/value-objects/Definition-the-project/date-end/date-end.value-object';
import { DateStartObjectValue } from '../../../domain/value-objects/Definition-the-project/date-start/date-start.value-object';
import { DefinitionProjectIdValueObject } from '../../../domain/value-objects/Definition-the-project/definition-project-id/definition-project-id.value-object';
import { DescriptionObjectValue } from '../../../domain/value-objects/Definition-the-project/description/description.value-object';
import { BudgetObjectValue } from '../../../domain/value-objects/proyect/budget/budget.value-object';
import { NameObjectValue } from '../../../domain/value-objects/proyect/name/name.value-object';
import { ProjectIdValueObject } from '../../../domain/value-objects/proyect/project-id/project-id.value-object';
import { StateApproveObjectValue } from '../../../domain/value-objects/proyect/state-approve/state-approve.value-object';
import { DefinitionValueObject } from '../../../domain/value-objects/reach/definition/definition.value-object';
import { PrioritizeValueObject } from '../../../domain/value-objects/reach/prioritize/prioritize.value-object';
import { ReachIdValueObject } from '../../../domain/value-objects/reach/reach-id/reach-id.value-object';
import { StateDefinitionValueObject } from '../../../domain/value-objects/reach/state-definition/state-definition.value-object';

/**
 * se crea la clase que implementa la interfaz IUseCase y se le pasa el comando y la respuesta que se espera como parametro de la clase y se extiende de ValueObjectErrorHandler
 *
 * @export
 * @class CreateProjectUseCase
 * @extends {ValueObjectErrorHandler}
 * @implements {IUseCase<ICreateProjecCommand, ICreateProjectResponse>}
 */
export class CreateProjectUseCase
  extends ValueObjectErrorHandler
  implements IUseCase<ICreateProjecCommand, ICreateProjectResponse>
{
  private readonly projectAggregate: DefinitionOfTheProjectAggregate;
  constructor(
    private readonly definitionoftheprojectService: IDefinitionOfTheProjectDomainService,
    private readonly registedDefinitionOfTheProjectEventPublisher: RegistedDefinitionOfTheProjectEventPublisher,
  ) {
    super();
    this.projectAggregate = new DefinitionOfTheProjectAggregate({
      definitionoftheprojectService,
      registedDefinitionOfTheProjectEventPublisher,
    });
  }
  /**
   * se crea la función execute que recibe el comando y retorna la respuesta
   *
   * @param {ICreateProjecCommand} command
   * @return {*}  {Promise<ICreateProjectResponse>}
   * @memberof CreateProjectUseCase
   */
  async execute(
    command: ICreateProjecCommand,
  ): Promise<ICreateProjectResponse> {
    //  se crea el value object de las entidades de dominio y se le pasa el valor del comando
    const definitionId = new DefinitionProjectIdValueObject(
      command.definitionId,
    );
    const dateStart = new DateStartObjectValue(command.dateStar);
    const dateEnd = new DateEndObjectValue(command.dateEnd);
    const state = new StateApproveObjectValue(command.state);
    const description = new DescriptionObjectValue(command.description);
    const project: {
      projectId: ProjectIdValueObject;
      name: NameObjectValue;
      budget: BudgetObjectValue;
      stateApprove: StateApproveObjectValue;
    }[] = [];
    command.project.forEach((element) => {
      project.push({
        projectId: new ProjectIdValueObject(element.projectId),
        name: new NameObjectValue(element.name),
        budget: new BudgetObjectValue(element.budget),
        stateApprove: new StateApproveObjectValue(element.stateApprove),
      });
    });
    const reach: {
      reachId: ReachIdValueObject;
      definition: DefinitionValueObject;
      prioritize: PrioritizeValueObject;
      stateDefinition: StateDefinitionValueObject;
    }[] = [];
    command.reach.forEach((element) => {
      reach.push({
        reachId: new ReachIdValueObject(element.reachId),
        definition: new DefinitionValueObject(element.definition),
        prioritize: new PrioritizeValueObject(element.prioritize),
        stateDefinition: new StateDefinitionValueObject(
          element.stateDefinition,
        ),
      });
    });
    //  se recopila los value object y se agregan los errores al value object de la clase
    if (dateStart.hasErrors() === true) {
      this.setErrors(dateStart.getErrors());
    }
    if (dateEnd.hasErrors() === true) {
      this.setErrors(dateEnd.getErrors());
    }
    if (state.hasErrors() === true) {
      this.setErrors(state.getErrors());
    }
    if (description.hasErrors() === true) {
      this.setErrors(description.getErrors());
    }
    project.forEach((element) => {
      if (element.projectId.hasErrors() === true) {
        this.setErrors(element.projectId.getErrors());
      }
      if (element.name.hasErrors() === true) {
        this.setErrors(element.name.getErrors());
      }
      if (element.budget.hasErrors() === true) {
        this.setErrors(element.budget.getErrors());
      }
      if (element.stateApprove.hasErrors() === true) {
        this.setErrors(element.stateApprove.getErrors());
      }
    });
    reach.forEach((element) => {
      if (element.reachId.hasErrors() === true) {
        this.setErrors(element.reachId.getErrors());
      }
      if (element.definition.hasErrors() === true) {
        this.setErrors(element.definition.getErrors());
      }
      if (element.prioritize.hasErrors() === true) {
        this.setErrors(element.prioritize.getErrors());
      }
      if (element.stateDefinition.hasErrors() === true) {
        this.setErrors(element.stateDefinition.getErrors());
      }
    });
    // se valida si hay errores en los value object y se lanza una excepcion
    if (this.hasErrors() === true) {
      throw new ValueObjectException(
        'Error al crear el proyecto',
        this.getErrors(),
      );
    }
    //  se llama al agregado y se le pasa los value object y se espera la respuesta
    const respuesta = await this.projectAggregate.registerDefinitionProject({
      definitionId,
      dateStart,
      dateEnd,
      stateApprove: state,
      description,
      projects: project,
      reachs: reach,
    });
    return {
      succes: true,
      data: respuesta,
    };
  }
}
