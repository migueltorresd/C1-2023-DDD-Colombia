import { Injectable } from '@nestjs/common';
import { IProjectDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/proyect.domain-service';
import { ProjectEntity } from '../entities/project.entity';
import { ProjectRepository } from '../repositories/project.reposity';
@Injectable()
export class ProjectService implements IProjectDomainService<ProjectEntity> {
  constructor(private readonly projectRepository: ProjectRepository) {}
  createProject(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<ProjectEntity> {
    return this.projectRepository.create({
      projectId,
      name,
      budget,
      stateApprove,
    });
  }
  editName(projectId: string, name: string): Promise<ProjectEntity> {
    const data = new ProjectEntity();
    data.name = name;
    return this.projectRepository.update(projectId, data);
  }
  editBudget(projectId: string, budget: number): Promise<ProjectEntity> {
    const data = new ProjectEntity();
    data.budget = budget;
    return this.projectRepository.update(projectId, data);
  }
  editStateApprove(
    projectId: string,
    stateApprove: boolean,
  ): Promise<ProjectEntity> {
    const data = new ProjectEntity();
    data.stateApprove = stateApprove;
    return this.projectRepository.update(projectId, data);
  }
  getProjectById(projectId: string): Promise<ProjectEntity> {
    return this.projectRepository.findOneByUsuarioId(projectId);
  }
}
