// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { DefinitionOfTheProjectEntity } from '../persistence/databases/postgres/entities/definition-of-the-project.entity';
// import { DefinitionOfTheProjectService } from '../persistence/databases/postgres/services/definition-of-the-project.service';

// @Controller('definition-of-the-project')
// export class DefinitionOfTheProjectController {
//   constructor(
//     private readonly configService: ConfigService,
//     private readonly definitionOfTheProjectService: DefinitionOfTheProjectService,
//   ) {}

//   @Post('register')
//   registerDefinitionProject(
//     @Body() definitionOfTheProject: DefinitionOfTheProjectEntity,
//   ): Promise<DefinitionOfTheProjectEntity> {
//     return this.definitionOfTheProjectService.registerDefinitionProject(
//     );
//   }

//   @Post('edit-description')
//   editDescription(
//     @Body() definitionOfTheProject: DefinitionOfTheProjectEntity,
//   ): Promise<DefinitionOfTheProjectEntity> {
//     return this.definitionOfTheProjectService.editDescription(
//       definitionOfTheProject.definitionOfTheProjectId,
//       definitionOfTheProject.description,
//     );
//   }
//   @Post('edit-state-approve')
//   editStateApprove(
//     @Body() definitionOfTheProject: DefinitionOfTheProjectEntity,
//   ): Promise<DefinitionOfTheProjectEntity> {
//     return this.definitionOfTheProjectService.editStateApprove(
//       definitionOfTheProject.definitionOfTheProjectId,
//       definitionOfTheProject.stateApprove,
//     );
//   }

//   @Post('edit-date-start')
//   editDateStart(
//     @Body() definitionOfTheProject: DefinitionOfTheProjectEntity,
//   ): Promise<DefinitionOfTheProjectEntity> {
//     return this.definitionOfTheProjectService.editDateStart(
//       definitionOfTheProject.definitionOfTheProjectId,
//       definitionOfTheProject.dateStart,
//     );
//   }

//   @Post('edit-date-end')
//   editDateEnd(
//     @Body() definitionOfTheProject: DefinitionOfTheProjectEntity,
//   ): Promise<DefinitionOfTheProjectEntity> {
//     return this.definitionOfTheProjectService.editDateEnd(
//       definitionOfTheProject.definitionOfTheProjectId,
//       definitionOfTheProject.dateEnd,
//     );
//   }

//   @Get('project-by-id')
//   getDefinitionOfTheProjectById(
//     @Body() definitionOfTheProject: DefinitionOfTheProjectEntity,
//   ): Promise<DefinitionOfTheProjectEntity> {
//     return this.definitionOfTheProjectService.getDefinitionOfTheProjectById(
//       definitionOfTheProject.definitionOfTheProjectId,
//     );
//   }

// }
