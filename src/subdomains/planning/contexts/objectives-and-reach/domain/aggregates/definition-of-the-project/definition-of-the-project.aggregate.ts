/* Importing the interfaces and classes that are going to be used in the aggregate root. */
import { AggregateRootException } from 'src/shared/sofka';
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

export class DefinitionOfTheProjectAggregateRoot
  implements
    IDefinitionOfTheProjectDomainService,
    IProjectDomainService,
    IReachDomainService
{
  //interfaces
  private readonly defifinitionOfTheProject: IDefinitionOfTheProjectDomainService;
  private readonly project: IProjectDomainService;
  private readonly reachService: IReachDomainService;
  //definition
  private readonly addedEndDateEventPublisher: AddedEndDateEventPublisher<DefinitionOfTheProjectDomainEntity>;
  private readonly dateEndEditedEventPublisher: DateEndEditedEventPublisher<DefinitionOfTheProjectDomainEntity>;
  private readonly definitionOfTheProjectEventPublisher: DefinitionOfTheProjectObtainedEventPublisher<DefinitionOfTheProjectDomainEntity>;
  private readonly projectDescriptionCreatedEventPublisher: ProjectDescriptionCreatedEventPublisher<DefinitionOfTheProjectDomainEntity>;
  private readonly projectDescriptionEditedEventPublisher: ProjectDescriptionEditedEventPublisher<DefinitionOfTheProjectDomainEntity>;
  private readonly registedDefinitionOfTheProjectEventPublisher: RegistedDefinitionOfTheProjectEventPublisher<DefinitionOfTheProjectDomainEntity>;
  private readonly stateApproveEditedEventPublisher: StateApproveEditedEventPublisher<DefinitionOfTheProjectDomainEntity>;
  //project
  private readonly budgetEditedEventPublisher: BudgetEditedEventPublisher<ProjectDomainEntity>;
  private readonly nameEditedEventPublisher: NameEditedEventPublisher<ProjectDomainEntity>;
  private readonly projectCreatedEventPublisher: ProjectCreatedEventPublisher<ProjectDomainEntity>;
  private readonly projectObtainedEventPublisher: ProjectObtainedEventPublisher<ProjectDomainEntity>;
  private readonly projectStatusEditedEventPublisher: ProjectStatusEditedEventPublisher<ProjectDomainEntity>;
  //reach
  private readonly editedReachDefinitionEventPublisher: EditedReachDefinitionEventPublisher<ReachDomainEntity>;
  private readonly editedStateDefinitionEventPublisher: EditedStateDefinitionEventPublisher<ReachDomainEntity>;
  private readonly prioritizationEditedEventPublisher: PrioritizationEditedEventPublisher<ReachDomainEntity>;
  private readonly reachOfTheProjectCreatedEventPublisher: ReachOfTheProjectCreatedEventPublisher<ReachDomainEntity>;

  constructor({
    defifinitionoftheproject,
    project,
    reach,
    //definition
    addedEndDateEventPublisher,
    dateEndEditedEventPublisher,
    definitionOfTheProjectEventPublisher,
    projectDescriptionCreatedEventPublisher,
    projectDescriptionEditedEventPublisher,
    registedDefinitionOfTheProjectEventPublisher,
    stateApproveEditedEventPublisher,
    //project
    budgetEditedEventPublisher,
    nameEditedEventPublisher,
    projectCreatedEventPublisher,
    projectObtainedEventPublisher,
    projectStatusEditedEventPublisher,
    //reach
    editedReachDefinitionEventPublisher,
    editedStateDefinitionEventPublisher,
    prioritizationEditedEventPublisher,
    reachOfTheProjectCreatedEventPublisher,
  }: {
    defifinitionoftheproject?: IDefinitionOfTheProjectDomainService;
    project?: IProjectDomainService;
    reach?: IReachDomainService;
    //definition
    addedEndDateEventPublisher: AddedEndDateEventPublisher;
    dateEndEditedEventPublisher: DateEndEditedEventPublisher;
    definitionOfTheProjectEventPublisher: DefinitionOfTheProjectObtainedEventPublisher;
    projectDescriptionCreatedEventPublisher: ProjectDescriptionCreatedEventPublisher;
    projectDescriptionEditedEventPublisher: ProjectDescriptionEditedEventPublisher;
    registedDefinitionOfTheProjectEventPublisher: RegistedDefinitionOfTheProjectEventPublisher;
    stateApproveEditedEventPublisher: StateApproveEditedEventPublisher;
    //project
    budgetEditedEventPublisher: BudgetEditedEventPublisher;
    nameEditedEventPublisher: NameEditedEventPublisher;
    projectCreatedEventPublisher: ProjectCreatedEventPublisher;
    projectObtainedEventPublisher: ProjectObtainedEventPublisher;
    projectStatusEditedEventPublisher: ProjectStatusEditedEventPublisher;
    //reach
    editedReachDefinitionEventPublisher: EditedReachDefinitionEventPublisher;
    editedStateDefinitionEventPublisher: EditedStateDefinitionEventPublisher;
    prioritizationEditedEventPublisher: PrioritizationEditedEventPublisher;
    reachOfTheProjectCreatedEventPublisher: ReachOfTheProjectCreatedEventPublisher;
  }) {}
  createDescripcionProject(
    definitionId: string,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editStateApproveProject(
    definitionId: string,
    stateApprove: string,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  addDateEnd(dateEnd: string): Promise<DefinitionOfTheProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editDateEnd(dateEnd: string): Promise<DefinitionOfTheProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  registerDefinitionProject(
    definitionId: string,
    description: string,
    stateApprove: string,
    dateStart: Date,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }

  async createReach(
    definitionId: string,
    definition: string,
    prioritize: string,
    stateDefinition: string,
  ): Promise<ReachDomainEntity> {
    if (!this.reachOfTheProjectCreatedEventPublisher) {
      throw new AggregateRootException('reach is not defined');
    }
    if (this.reachService) {
      throw new AggregateRootException('reach is not defined');
    }
    this.project.createProject();
    this.defifinitionOfTheProject.createDescripcionProject('');
    this.reachService.createReach();
    // const response = await this.reachService(
    //   definitionId,
    //   definition,
    //   prioritize,
    //   stateDefinition,
    // );
    this.reachOfTheProjectCreatedEventPublisher.publish();
    return response;
  }
  editDefinition(
    definitionId: string,
    definition: string,
  ): Promise<ReachDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editPrioritize(
    definitionId: string,
    prioritize: string,
  ): Promise<ReachDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editStateDefinition(
    definitionId: string,
    stateDefinition: string,
  ): Promise<ReachDomainEntity> {
    throw new Error('Method not implemented.');
  }
  createProject(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<ProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editName(projectI: string, name: string): Promise<ProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editBudget(projectId: string, budget: number): Promise<ProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  editStateApprove(
    projectId: string,
    stateApprove: boolean,
  ): Promise<ProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
  getPyrojectById(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<ProjectDomainEntity> {
    throw new Error('Method not implemented.');
  }
}
