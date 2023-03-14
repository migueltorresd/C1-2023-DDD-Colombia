import { DefinitionOfTheProjectDomainEntity } from '../../entities/definition-of-the-project.domain-entity';

/**
 * Esta interface representa la respuesta de la creación de un proyecto
 *
 * @export
 * @interface ICreateProjectResponse // esta interface representa la respuesta de la creación de un proyecto
 */
export interface ICreateProjectResponse {
  succes: boolean;
  data: DefinitionOfTheProjectDomainEntity | null;
}
