import { IsString } from 'class-validator';
import { IGetProjectCommand } from '../../../domain/interfaces/commands/get-project.command';

export class GetProjectCommand implements IGetProjectCommand {
  @IsString({ message: 'El id del proyecto es requerido' })
  projectId: string;
}
