import { IsDate, IsString } from 'class-validator';
import { ICreateProjecCommand } from '../../../domain/interfaces/commands/create-project.command';

/**
 * este comando es el encargado de recibir los datos del proyecto
 *
 * @export
 * @class CreateProjectCommand
 * @implements {ICreateProjecCommand} // esta interface representa el comando de creación de un proyecto
 */

export class CreateProjectCommand implements ICreateProjecCommand {
  @IsString({ message: 'El id del proyecto es requerido' })
  definitionId: string;
  @IsDate({ message: 'La fecha de inicio es requerida' })
  dateStar: Date;
  @IsDate({ message: 'La fecha de fin es requerida' })
  dateEnd: Date;
  @IsString({ message: 'El estado es requerido' })
  state: boolean;
  @IsString({ message: 'La descripción es requerida' })
  description: string;

  project: {
    projectId: string;
    name: string;
    budget: number;
    stateApprove: boolean;
  }[];
  reach: {
    reachId: string;
    definition: string;
    prioritize: string;
    stateDefinition: boolean;
  }[];
}
