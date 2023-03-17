import { IsString } from 'class-validator';
import { IGetProjectCommand } from '../../../domain/interfaces/commands/get-project.command';

/**
 * este comando es el encargado de recibir los datos del proyecto
 *
 * @export
 * @class GetProjectCommand
 * @implements {IGetProjectCommand}
 */
export class GetProjectCommand implements IGetProjectCommand {
  @IsString({ message: 'El id del proyecto es requerido' })
  projectId: string;
}
