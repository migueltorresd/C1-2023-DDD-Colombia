import { ProjectDomainEntity } from '../../entities/project.domain-entity';

/**
 * Interfaz que representa la respuesta de la consulta de un proyecto
 *
 * @export
 * @Interface IGetProjectResponse // clase que representa la respuesta de la consulta de un proyecto
 */
export interface IGetProjectResponse {
  succes: boolean;
  data: ProjectDomainEntity | null;
}
