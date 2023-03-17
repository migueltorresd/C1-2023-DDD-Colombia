import { IsString } from 'class-validator';
import { IEditProjectDescriptionCommand } from '../../../domain/interfaces/commands/edit-project-description.command';

/**
 * este comando es el encargado de recibir los datos del proyecto
 *
 * @export
 * @class EditDefinitionOfTheProjectDescriptionCommand
 * @implements {IEditProjectDescriptionCommand}
 */
export class EditDefinitionOfTheProjectDescriptionCommand
  implements IEditProjectDescriptionCommand
{
  @IsString({ message: 'El id del proyecto es requerido' })
  definitionId: string;
  @IsString({ message: 'La descripción del proyecto es requerida' })
  description: string;
}
