import { DefinitionOfTheProjectDomainEntity } from '../../entities/definition-of-the-project.domain-entity';
/**
 * Interfaz que representa la respuesta de la consulta de una definicion de proyecto
 *
 * @export
 * @interface IGetDefinitionOfTheProjectResponse
 */
export interface IGetDefinitionOfTheProjectResponse {
  succes: boolean;
  data: DefinitionOfTheProjectDomainEntity | null;
}
