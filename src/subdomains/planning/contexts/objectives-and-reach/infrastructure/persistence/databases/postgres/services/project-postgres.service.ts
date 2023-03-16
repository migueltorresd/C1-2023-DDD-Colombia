import { Injectable } from '@nestjs/common';
import { IProjectDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/proyect.domain-service';
import { DefinitionOfTheProjectPostgresEntity } from '../entities/definition-of-the-project-postgres.entity';
import { ProjectPostgresEntity } from '../entities/project-postgres.entity';
import { ProjectRepository } from '../repositories/project.reposity';
@Injectable()
export class ProjectPostgresService
  implements IProjectDomainService<ProjectPostgresEntity>
{
  constructor(private readonly projectRepository: ProjectRepository) {}
  createProject(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<ProjectPostgresEntity> {
    return this.projectRepository.create({
      projectId,
      name,
      budget,
      stateApprove,
      definitionOfTheProject: new DefinitionOfTheProjectPostgresEntity(),
    });
  }
  editName(projectId: string, name: string): Promise<ProjectPostgresEntity> {
    const data = new ProjectPostgresEntity();
    data.name = name;
    return this.projectRepository.update(projectId, data);
  }
  editBudget(
    projectId: string,
    budget: number,
  ): Promise<ProjectPostgresEntity> {
    const data = new ProjectPostgresEntity();
    data.budget = budget;
    return this.projectRepository.update(projectId, data);
  }
  editStateApprove(
    projectId: string,
    stateApprove: boolean,
  ): Promise<ProjectPostgresEntity> {
    const data = new ProjectPostgresEntity();
    data.stateApprove = stateApprove;
    return this.projectRepository.update(projectId, data);
  }
  getProjectById(projectId: string): Promise<ProjectPostgresEntity> {
    return this.projectRepository.findOneById(projectId);
  }
}
