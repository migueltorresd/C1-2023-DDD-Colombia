import { Controller, Get, Param } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { GetProjectUseCase } from '../../aplicacion/use-cases/get-project/get-project.use-case';
import { ProjectObtainedPublisher } from '../messaging/publisher/project-obtained-publisher';
import { ProjectService } from '../persistence/services/project.service';

@Controller('project')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly projectObtainedPublisher: ProjectObtainedPublisher,
  ) {}

  @Get(':id')
  async getProject(@Param('id', ParseUUIDPipe) command: string) {
    const useCase = new GetProjectUseCase(
      this.projectService,
      this.projectObtainedPublisher,
    );
    return await useCase.execute({ projectId: command });
  }
}
