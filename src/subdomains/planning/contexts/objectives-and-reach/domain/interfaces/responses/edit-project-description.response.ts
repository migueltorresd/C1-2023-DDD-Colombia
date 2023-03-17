import { DefinitionOfTheProjectDomainEntity } from '../../entities/definition-of-the-project.domain-entity';

/**
 * esta interface representa la respuesta del comando para editar la descripción de un proyecto
 *
 * @export
 * @interface IEditProjectDescriptionResponse
 */
export interface IEditProjectDescriptionResponse {
  success: boolean;
  data: DefinitionOfTheProjectDomainEntity;
}
