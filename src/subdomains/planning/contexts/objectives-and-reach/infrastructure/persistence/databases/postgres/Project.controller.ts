import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProjectPostgresEntity } from './entities/project-postgres.entity';
import { ProjectPostgresService } from './services/project-postgres.service';

@Controller('project')
export class ProjectController {
  constructor(
    private readonly configService: ConfigService,
    private readonly projectService: ProjectPostgresService,
  ) {}

  @Post('create')
  createProject(
    @Body() project: ProjectPostgresEntity,
  ): Promise<ProjectPostgresEntity> {
    return this.projectService.createProject(
      project.projectId,
      project.name,
      project.budget,
      project.stateApprove,
    );
  }

  @Post('edit-name')
  editName(
    @Body() project: ProjectPostgresEntity,
  ): Promise<ProjectPostgresEntity> {
    return this.projectService.editName(project.projectId, project.name);
  }
  @Post('edit-budget')
  editBudget(
    @Body() project: ProjectPostgresEntity,
  ): Promise<ProjectPostgresEntity> {
    return this.projectService.editBudget(project.projectId, project.budget);
  }
  @Post('edit-state-approve')
  editStateApprove(
    @Body() project: ProjectPostgresEntity,
  ): Promise<ProjectPostgresEntity> {
    return this.projectService.editStateApprove(
      project.projectId,
      project.stateApprove,
    );
  }
}
