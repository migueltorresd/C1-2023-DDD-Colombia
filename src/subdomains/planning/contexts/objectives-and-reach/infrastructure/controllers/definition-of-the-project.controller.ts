import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectUseCase } from '../../aplicacion/use-cases/create-project/create-project.use-case';
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
}
