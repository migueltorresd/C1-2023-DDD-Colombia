import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProjectEntity } from '../persistence/databases/postgres/entities/project.entity';
import { ProjectService } from '../persistence/databases/postgres/services/project.service';

@Controller('project')
export class ProjectController {
  constructor(
    private readonly configService: ConfigService,
    private readonly projectService: ProjectService,
  ) {}

  @Post('create')
  createProject(@Body() project: ProjectEntity): Promise<ProjectEntity> {
    return this.projectService.createProject(
      project.projectId,
      project.name,
      project.budget,
      project.stateApprove,
    );
  }

  @Post('edit-name')
  editName(@Body() project: ProjectEntity): Promise<ProjectEntity> {
    return this.projectService.editName(project.projectId, project.name);
  }
  @Post('edit-budget')
  editBudget(@Body() project: ProjectEntity): Promise<ProjectEntity> {
    return this.projectService.editBudget(project.projectId, project.budget);
  }
  @Post('edit-state-approve')
  editStateApprove(@Body() project: ProjectEntity): Promise<ProjectEntity> {
    return this.projectService.editStateApprove(
      project.projectId,
      project.stateApprove,
    );
  }
}
