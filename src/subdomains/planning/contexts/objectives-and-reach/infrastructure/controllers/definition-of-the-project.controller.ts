import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateProjectUseCase } from '../../aplicacion/use-cases/create-project/create-project.use-case';
import { GetDefinitionOfTheProjectCase } from '../../aplicacion/use-cases/get-definition-of-the-project/get-definition-of-the-project-case';
import { DefinitionOfTheProjectObtainPublisher } from '../messaging/publisher/definition-of-the-project-obtained-publishe';
import { RegistedDefinitionOfTheProjectPublisher } from '../messaging/publisher/registed-definition-of-the-project.publisher';
import { DefinitionOfTheProjectService } from '../persistence/services/definition-of-the-project.service';
import { CreateProjectCommand } from '../utils/commands/create-project.command';

/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class DefinitionOfTheProjectController
 */
@Controller('definition-of-the-project')
export class DefinitionOfTheProjectController {
  constructor(
    private readonly definitionOfTheProjectService: DefinitionOfTheProjectService,
    private readonly definitionOfTheProjectPublisher: RegistedDefinitionOfTheProjectPublisher,
    private readonly definitionOfTheProjectObtainedPublisher: DefinitionOfTheProjectObtainPublisher,
  ) {}

  /**
   * este metodo es el encargado de recibir la peticion http
   *
   * @param {CreateProjectCommand} command // se le pasa el comando
   * @return {Promise<any>}  // retorna la respuesta
   * @memberof DefinitionOfTheProjectController
   */
  @Post()
  async create(@Body() command: CreateProjectCommand) {
    console.log(command);
    const useCase = new CreateProjectUseCase(
      this.definitionOfTheProjectService,
      this.definitionOfTheProjectPublisher,
    );
    return await useCase.execute(command);
  }

  @Get(':id')
  async getDefinitionOfTheProject(@Param('id', ParseUUIDPipe) command: string) {
    const useCase = new GetDefinitionOfTheProjectCase(
      this.definitionOfTheProjectService,
      this.definitionOfTheProjectObtainedPublisher,
    );
    return await useCase.execute({ definitionId: command });
  }
}
