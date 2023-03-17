import { DefinitionOfTheProjectDomainEntity } from '../../entities/definition-of-the-project.domain-entity';
import { ProjectDomainEntity } from '../../entities/project.domain-entity';
import { ReachDomainEntity } from '../../entities/reach.domain-entity';
import { AddedEndDateEventPublisher } from '../../events/publishers/definition-of-the-project/added-end-date.event-publisher';
import { DateEndEditedEventPublisher } from '../../events/publishers/definition-of-the-project/date-end-edited.event-publisher';
import { DefinitionOfTheProjectObtainedEventPublisher } from '../../events/publishers/definition-of-the-project/definition-of-the-project-obtained.event-publisher';
import { ProjectDescriptionCreatedEventPublisher } from '../../events/publishers/definition-of-the-project/project-description-created.event-publisher';
import { ProjectDescriptionEditedEventPublisher } from '../../events/publishers/definition-of-the-project/project-description-edited.event-publisher';
import { RegistedDefinitionOfTheProjectEventPublisher } from '../../events/publishers/definition-of-the-project/registed-definition-of-the-project.event-publisher';
import { StateApproveEditedEventPublisher } from '../../events/publishers/definition-of-the-project/state-approve-edited.event-publisher';
import { BudgetEditedEventPublisher } from '../../events/publishers/project/budget-edited.event-publisher';
import { NameEditedEventPublisher } from '../../events/publishers/project/name-edited.event-publisher';
import { ProjectCreatedEventPublisher } from '../../events/publishers/project/project-created.event-publisher';
import { ProjectObtainedEventPublisher } from '../../events/publishers/project/project-obtained.event-publisher';
import { ProjectStatusEditedEventPublisher } from '../../events/publishers/project/project-status-edited.event-publisher';
import { EditedReachDefinitionEventPublisher } from '../../events/publishers/reach/edited-reach-definition.event-publisher';
import { EditedStateDefinitionEventPublisher } from '../../events/publishers/reach/edited-state-definition.event-publisher';
import { PrioritizationEditedEventPublisher } from '../../events/publishers/reach/prioritization-edited.event-publisher';
import { ReachOfTheProjectCreatedEventPublisher } from '../../events/publishers/reach/reach-of-the-project-created.event-publisher';
import { IDefinitionOfTheProjectDomainService } from '../../services/definition-of-the-project.domain-service';
import { IProjectDomainService } from '../../services/proyect.domain-service';
import { IReachDomainService } from '../../services/reach.domain-service';
import { AddDateEndHelper } from './helpers/definition-of-the-project-helpers/add-date-end/add-date-end.helper';
import { createDescripcionProjectHelper } from './helpers/definition-of-the-project-helpers/create-descripcion-project/create-descripcion-project.helper';
import { EditDateEndHelper } from './helpers/definition-of-the-project-helpers/edit-date-end/edit-date-end.helper';
import { EditDescripcionProjectHelper } from './helpers/definition-of-the-project-helpers/edit-descripcion-project/edit-descripcion-project.helper';
import { EditStateApproveProjectHelper } from './helpers/definition-of-the-project-helpers/edit-state-approve-project/edit-state-approve-project.helper';
import { GetDefinitionOfTheProjectHelper } from './helpers/definition-of-the-project-helpers/get-definition-of-the-project/get-definition-of-the-project.Helper';
import { RegisterDefinitionProjectHelpers } from './helpers/definition-of-the-project-helpers/register-definition-project/register-definition-project.helpers';
import { createProjectHelper } from './helpers/project-helpers/create-project/create-project.helper';
import { EditBudgetHelper } from './helpers/project-helpers/edit-budget/edit-budget.helper';
import { EditNameHelper } from './helpers/project-helpers/edit-name/edit-name.helper';
import { EditStateApproveHelper } from './helpers/project-helpers/edit-state-approve/edit-state-approve.helper';
import { GetProjectByIdHelper } from './helpers/project-helpers/get-project-by-id/get-project-by-id.helper';
import { CreateReachHelper } from './helpers/reach-helpers/create-reach/create-reach.helper';
import { EditDefinitionHelper } from './helpers/reach-helpers/edit-definition/edit-definition.helper';
import { EditPrioritizeHelper } from './helpers/reach-helpers/edit-prioritize/edit-prioritize.helper';
import { EditStateDefinitionHelper } from './helpers/reach-helpers/edit-state-definition/edit-state-definition.helper';

/**
 * Esta clase es el agregado de la definición del proyecto
 *
 * @export
 * @class DefinitionOfTheProjectAggregate
 * @implements {IReachDomainService} // esta interfaz es para poder usar los servicios de reach
 * @implements {IProjectDomainService} // esta interfaz es para poder usar los servicios de project
 * @implements {IDefinitionOfTheProjectDomainService} // esta interfaz es para poder usar los servicios de definition of the project
 */
export class DefinitionOfTheProjectAggregate
  implements
    IReachDomainService,
    IProjectDomainService,
    IDefinitionOfTheProjectDomainService
{
  private readonly reachService: IReachDomainService;
  private readonly projectService: IProjectDomainService;
  private readonly definitionoftheprojectService: IDefinitionOfTheProjectDomainService;
  // reach
  private readonly reachOfTheProjectCreatedEventPublisher: ReachOfTheProjectCreatedEventPublisher;
  private readonly editedReachDefinitionEventPublisher: EditedReachDefinitionEventPublisher;
  private readonly prioritizationEditedEventPublisher: PrioritizationEditedEventPublisher;
  private readonly editedStateDefinitionEventPublisher: EditedStateDefinitionEventPublisher;
  // project
  private readonly projectCreatedEventPublisher: ProjectCreatedEventPublisher;
  private readonly nameEditedEventPublisher: NameEditedEventPublisher;
  private readonly budgetEditedEventPublisher: BudgetEditedEventPublisher;
  private readonly projectStatusEditedEventPublisher: ProjectStatusEditedEventPublisher;
  private readonly projectObtainedEventPublisher: ProjectObtainedEventPublisher;
  // DefinitionOfTheProjectAggregate
  private readonly addedEndDateEventPublisher: AddedEndDateEventPublisher;
  private readonly dateEndEditedEventPublisher: DateEndEditedEventPublisher;
  private readonly definitionOfTheProjectObtainedEventPublisher: DefinitionOfTheProjectObtainedEventPublisher;
  private readonly projectDescriptionCreatedEventPublisher: ProjectDescriptionCreatedEventPublisher;
  private readonly projectDescriptionEditedEventPublisher: ProjectDescriptionEditedEventPublisher;
  private readonly registedDefinitionOfTheProjectEventPublisher: RegistedDefinitionOfTheProjectEventPublisher;
  private readonly stateApproveEditedEventPublisher: StateApproveEditedEventPublisher;

  /**
   * Crea una instancia de DefinitionOfTheProjectAggregate.
   * se encarga de la logica de negocio de los agregados
   * @param {{
   *     reachService: IReachDomainService;
   *     projectService: IProjectDomainService;
   *     definitionoftheprojectService: IDefinitionOfTheProjectDomainService;
   *     //reach
   *     reachOfTheProjectCreatedEventPublisher?: ReachOfTheProjectCreatedEventPublisher;
   *     editedReachDefinitionEventPublisher?: EditedReachDefinitionEventPublisher;
   *     prioritizationEditedEventPublisher?: PrioritizationEditedEventPublisher;
   *     editedStateDefinitionEventPublisher?: EditedStateDefinitionEventPublisher;
   *     //project
   *     projectCreatedEventPublisher?: ProjectCreatedEventPublisher;
   *     nameEditedEventPublisher?: NameEditedEventPublisher;
   *     budgetEditedEventPublisher?: BudgetEditedEventPublisher;
   *     projectStatusEditedEventPublisher?: ProjectStatusEditedEventPublisher;
   *     projectObtainedEventPublisher?: ProjectObtainedEventPublisher;
   *     //DefinitionOfTheProjectAggregate
   *     addedEndDateEventPublisher?: AddedEndDateEventPublisher;
   *     dateEndEditedEventPublisher?: DateEndEditedEventPublisher;
   *     definitionOfTheProjectObtainedEventPublisher?: DefinitionOfTheProjectObtainedEventPublisher;
   *     projectDescriptionCreatedEventPublisher?: ProjectDescriptionCreatedEventPublisher;
   *     projectDescriptionEditedEventPublisher?: ProjectDescriptionEditedEventPublisher;
   *     registedDefinitionOfTheProjectEventPublisher?: RegistedDefinitionOfTheProjectEventPublisher;
   *     stateApproveEditedEventPublisher?: StateApproveEditedEventPublisher;
   *   }} {
   *     reachService,
   *     projectService,
   *     definitionoftheprojectService,
   *     //reach
   *     reachOfTheProjectCreatedEventPublisher,
   *     editedReachDefinitionEventPublisher,
   *     prioritizationEditedEventPublisher,
   *     editedStateDefinitionEventPublisher,
   *     //project
   *     projectCreatedEventPublisher,
   *     nameEditedEventPublisher,
   *     budgetEditedEventPublisher,
   *     projectStatusEditedEventPublisher,
   *     projectObtainedEventPublisher,
   *     //DefinitionOfTheProjectAggregate
   *     addedEndDateEventPublisher,
   *     dateEndEditedEventPublisher,
   *     definitionOfTheProjectObtainedEventPublisher,
   *     projectDescriptionCreatedEventPublisher,
   *     projectDescriptionEditedEventPublisher,
   *     registedDefinitionOfTheProjectEventPublisher,
   *     stateApproveEditedEventPublisher,
   *   }
   * @memberof DefinitionOfTheProjectAggregate
   */
  constructor({
    reachService,
    projectService,
    definitionoftheprojectService,
    //reach
    reachOfTheProjectCreatedEventPublisher,
    editedReachDefinitionEventPublisher,
    prioritizationEditedEventPublisher,
    editedStateDefinitionEventPublisher,
    //project
    projectCreatedEventPublisher,
    nameEditedEventPublisher,
    budgetEditedEventPublisher,
    projectStatusEditedEventPublisher,
    projectObtainedEventPublisher,
    //DefinitionOfTheProjectAggregate
    addedEndDateEventPublisher,
    dateEndEditedEventPublisher,
    definitionOfTheProjectObtainedEventPublisher,
    projectDescriptionCreatedEventPublisher,
    projectDescriptionEditedEventPublisher,
    registedDefinitionOfTheProjectEventPublisher,
    stateApproveEditedEventPublisher,
  }: {
    reachService?: IReachDomainService;
    projectService?: IProjectDomainService;
    definitionoftheprojectService?: IDefinitionOfTheProjectDomainService;
    //reach
    reachOfTheProjectCreatedEventPublisher?: ReachOfTheProjectCreatedEventPublisher;
    editedReachDefinitionEventPublisher?: EditedReachDefinitionEventPublisher;
    prioritizationEditedEventPublisher?: PrioritizationEditedEventPublisher;
    editedStateDefinitionEventPublisher?: EditedStateDefinitionEventPublisher;
    //project
    projectCreatedEventPublisher?: ProjectCreatedEventPublisher;
    nameEditedEventPublisher?: NameEditedEventPublisher;
    budgetEditedEventPublisher?: BudgetEditedEventPublisher;
    projectStatusEditedEventPublisher?: ProjectStatusEditedEventPublisher;
    projectObtainedEventPublisher?: ProjectObtainedEventPublisher;
    //DefinitionOfTheProjectAggregate
    addedEndDateEventPublisher?: AddedEndDateEventPublisher;
    dateEndEditedEventPublisher?: DateEndEditedEventPublisher;
    definitionOfTheProjectObtainedEventPublisher?: DefinitionOfTheProjectObtainedEventPublisher;
    projectDescriptionCreatedEventPublisher?: ProjectDescriptionCreatedEventPublisher;
    projectDescriptionEditedEventPublisher?: ProjectDescriptionEditedEventPublisher;
    registedDefinitionOfTheProjectEventPublisher?: RegistedDefinitionOfTheProjectEventPublisher;
    stateApproveEditedEventPublisher?: StateApproveEditedEventPublisher;
  }) {
    this.reachService = reachService ?? this.reachService;
    this.projectService = projectService ?? this.projectService;
    this.definitionoftheprojectService =
      definitionoftheprojectService ?? this.definitionoftheprojectService;
    // reach
    this.reachOfTheProjectCreatedEventPublisher =
      reachOfTheProjectCreatedEventPublisher ??
      this.reachOfTheProjectCreatedEventPublisher;
    this.editedReachDefinitionEventPublisher =
      editedReachDefinitionEventPublisher ??
      this.editedReachDefinitionEventPublisher;
    this.prioritizationEditedEventPublisher =
      prioritizationEditedEventPublisher ??
      this.prioritizationEditedEventPublisher;
    this.editedStateDefinitionEventPublisher =
      editedStateDefinitionEventPublisher ??
      this.editedStateDefinitionEventPublisher;
    // project
    this.projectCreatedEventPublisher =
      projectCreatedEventPublisher ?? this.projectCreatedEventPublisher;
    this.nameEditedEventPublisher =
      nameEditedEventPublisher ?? this.nameEditedEventPublisher;
    this.budgetEditedEventPublisher =
      budgetEditedEventPublisher ?? this.budgetEditedEventPublisher;
    this.projectStatusEditedEventPublisher =
      projectStatusEditedEventPublisher ??
      this.projectStatusEditedEventPublisher;
    this.projectObtainedEventPublisher =
      projectObtainedEventPublisher ?? this.projectObtainedEventPublisher;
    // DefinitionOfTheProjectAggregate
    this.addedEndDateEventPublisher =
      addedEndDateEventPublisher ?? this.addedEndDateEventPublisher;
    this.dateEndEditedEventPublisher =
      dateEndEditedEventPublisher ?? this.dateEndEditedEventPublisher;
    this.definitionOfTheProjectObtainedEventPublisher =
      definitionOfTheProjectObtainedEventPublisher ??
      this.definitionOfTheProjectObtainedEventPublisher;
    this.projectDescriptionCreatedEventPublisher =
      projectDescriptionCreatedEventPublisher ??
      this.projectDescriptionCreatedEventPublisher;
    this.projectDescriptionEditedEventPublisher =
      projectDescriptionEditedEventPublisher ??
      this.projectDescriptionEditedEventPublisher;
    this.registedDefinitionOfTheProjectEventPublisher =
      registedDefinitionOfTheProjectEventPublisher ??
      this.registedDefinitionOfTheProjectEventPublisher;
    this.stateApproveEditedEventPublisher =
      stateApproveEditedEventPublisher ?? this.stateApproveEditedEventPublisher;
  }

  // reach ----------------------------------------
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función CreateReachHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} definition // definición del proyecto
   * @param {string} prioritize // prioridad
   * @param {boolean} stateDefinition // estado de la definición
   * @return {Promise<ReachDomainEntity>} // retorna la entidad de dominio de alcance
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  createReach(
    definitionId: string,
    definition: string,
    prioritize: string,
    stateDefinition: boolean,
  ): Promise<ReachDomainEntity> {
    return CreateReachHelper(
      definitionId,
      definition,
      prioritize,
      stateDefinition,
      this.reachOfTheProjectCreatedEventPublisher,
      this.reachService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditDefinitionHelper
   *
   * @param {string} definitionId// id de la definición del proyecto
   * @param {string} definition// definición del proyecto
   * @return {Promise<ReachDomainEntity>}// retorna la entidad de dominio de alcance
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editDefinition(
    definitionId: string,
    definition: string,
  ): Promise<ReachDomainEntity> {
    return EditDefinitionHelper(
      definitionId,
      definition,
      this.editedReachDefinitionEventPublisher,
      this.reachService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditPrioritizeHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} prioritize // prioridad de la definición del proyecto
   * @return {Promise<ReachDomainEntity>} // retorna la entidad de dominio de alcance
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editPrioritize(
    definitionId: string,
    prioritize: string,
  ): Promise<ReachDomainEntity> {
    return EditPrioritizeHelper(
      definitionId,
      prioritize,
      this.prioritizationEditedEventPublisher,
      this.reachService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditStateDefinitionHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} stateDefinition // estado de la definición del proyecto
   * @return {Promise<ReachDomainEntity>} // retorna la entidad de dominio de alcance
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editStateDefinition(
    definitionId: string,
    stateDefinition: boolean,
  ): Promise<ReachDomainEntity> {
    return EditStateDefinitionHelper(
      definitionId,
      stateDefinition,
      this.editedStateDefinitionEventPublisher,
      this.reachService,
    );
  }
  // project --------------------------------------
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función createProjectHelper
   * @param {string} name // nombre del proyecto
   * @param {number} budget // presupuesto del proyecto
   * @param {boolean} stateApprove // estado de aprobación del proyecto
   * @return {Promise<ProjectDomainEntity>} // retorna la entidad de dominio del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  createProject(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<ProjectDomainEntity> {
    return createProjectHelper(
      projectId,
      name,
      budget,
      stateApprove,
      this.projectCreatedEventPublisher,
      this.projectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditNameHelper
   *
   * @param {string} projectId // id del proyecto
   * @param {number} budget // presupuesto del proyecto
   * @return {Promise<ProjectDomainEntity>} // retorna la entidad de dominio del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editBudget(projectId: string, budget: number): Promise<ProjectDomainEntity> {
    return EditBudgetHelper(
      projectId,
      budget,
      this.budgetEditedEventPublisher,
      this.projectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditNameHelper
   *
   * @param {string} projectId // id del proyecto
   * @param {string} name // nombre del proyecto
   * @return {Promise<ProjectDomainEntity>} //
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editName(projectId: string, name: string): Promise<ProjectDomainEntity> {
    return EditNameHelper(
      projectId,
      name,
      this.nameEditedEventPublisher,
      this.projectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditStateApproveHelper
   *
   * @param {string} projectId // id del proyecto
   * @param {boolean} stateApprove // estado de aprobación del proyecto
   * @return {Promise<ProjectDomainEntity>} // retorna la entidad de dominio del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editStateApprove(
    projectId: string,
    stateApprove: boolean,
  ): Promise<ProjectDomainEntity> {
    return EditStateApproveHelper(
      projectId,
      stateApprove,
      this.projectStatusEditedEventPublisher,
      this.projectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditNameHelper
   *
   * @param {string} projectId // id del proyecto
   * @param {string} name // nombre del proyecto
   * @param {number} budget // presupuesto del proyecto
   * @param {boolean} stateApprove // estado de aprobación del proyecto
   * @return {Promise<ProjectDomainEntity>} // retorna la entidad de dominio del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  async getProjectById(projectId: string): Promise<ProjectDomainEntity> {
    const project = await GetProjectByIdHelper(
      projectId,
      this.projectObtainedEventPublisher,
      this.projectService,
    );
    return project;
  }

  // DefinitionOfTheProjectAggregate ------------------
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función createDescripcionProjectHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} description // descripción del proyecto
   * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad de dominio de la definición del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */

  createDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    return createDescripcionProjectHelper(
      definitionId,
      description,
      this.projectDescriptionCreatedEventPublisher,
      this.definitionoftheprojectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditDescripcionProjectHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} description // descripción del proyecto
   * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad de dominio de la definición del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    return EditDescripcionProjectHelper(
      definitionId,
      description,
      this.projectDescriptionEditedEventPublisher,
      this.definitionoftheprojectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditStateApproveProjectHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {boolean} stateApprove // estado de aprobación del proyecto
   * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad de dominio de la definición del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editStateApproveProject(
    definitionId: string,
    stateApprove: boolean,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    return EditStateApproveProjectHelper(
      definitionId,
      stateApprove,
      this.stateApproveEditedEventPublisher,
      this.definitionoftheprojectService,
    );
  }

  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditDateStartHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} dateEnd // fecha de finalización del proyecto
   * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad de dominio de la definición del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  addDateEnd(
    definitionId: string,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    return AddDateEndHelper(
      definitionId,
      dateEnd,
      this.addedEndDateEventPublisher,
      this.definitionoftheprojectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditDateStartHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} dateEnd // fecha de finalización del proyecto
   * @return {Promise<DefinitionOfTheProjectDomainEntity>}// retorna la entidad de dominio de la definición del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  editDateEnd(
    definitionId: string,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    return EditDateEndHelper(
      definitionId,
      dateEnd,
      this.dateEndEditedEventPublisher,
      this.definitionoftheprojectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditDateStartHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} description // descripción del proyecto
   * @param {string} stateApprove // estado de aprobación del proyecto
   * @param {Date} dateStart // fecha de inicio del proyecto
   * @param {Date} dateEnd // fecha de finalización del proyecto
   * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad de dominio de la definición del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  registerDefinitionProject(
    entity: DefinitionOfTheProjectDomainEntity,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    return RegisterDefinitionProjectHelpers(
      entity,
      this.registedDefinitionOfTheProjectEventPublisher,
      this.definitionoftheprojectService,
    );
  }
  /**
   * validar que el evento no sea nulo y que el servicio no sea nulo gracias a la ayuda de la función EditDateStartHelper
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad de dominio de la definición del proyecto
   * @memberof DefinitionOfTheProjectAggregate // agregado de definición del proyecto
   */
  async getDefinitionOfTheProject(
    definitionId: string,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    const definition = await GetDefinitionOfTheProjectHelper(
      definitionId,
      this.definitionOfTheProjectObtainedEventPublisher,
      this.definitionoftheprojectService,
    );
    return definition;
  }
}
