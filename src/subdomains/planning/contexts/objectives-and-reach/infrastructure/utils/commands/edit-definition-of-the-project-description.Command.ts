import { IsString } from 'class-validator';
import { IEditProjectDescriptionCommand } from '../../../domain/interfaces/commands/edit-project-description.command';

export class EditDefinitionOfTheProjectDescriptionCommand
  implements IEditProjectDescriptionCommand
{
  @IsString({ message: 'El id del proyecto es requerido' })
  definitionId: string;
  @IsString({ message: 'La descripción del proyecto es requerida' })
  description: string;
}
