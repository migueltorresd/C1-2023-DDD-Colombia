import { ProjectDomainEntity } from '../entities/project.domain-entity';

export interface IProyectDomainService<Entity extends ProjectDomainEntity> {
  createProject(
    projectId?: string,
    name?: string,
    budget?: number,
    stateApprove?: boolean,
  ): Promise<Entity>;
  editName(projectId?: string, name?: string): Promise<Entity>;
  editBudget(projectId?: string, budget?: number): Promise<Entity>;
  editStateApprove(projectId?: string, stateApprove?: boolean): Promise<Entity>;
  getPyrojectById(
    projectId?: string,
    name?: string,
    budget?: number,
    stateApprove?: boolean,
  ): Promise<Entity>;
}
