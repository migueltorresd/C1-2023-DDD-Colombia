/**
 * esta interface representa el comando para editar la descripción de un proyecto
 *
 * @export
 * @interface IEditProjectDescriptionCommand
 */
export interface IEditProjectDescriptionCommand {
  definitionId: string;
  description: string;
}
