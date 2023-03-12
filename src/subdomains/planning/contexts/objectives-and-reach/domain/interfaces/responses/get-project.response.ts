import { ProjectDomainEntity } from '../../entities/project.domain-entity';

/**
 * Interfaz que representa la respuesta de la consulta de un proyecto
 *
 * @export
 * @class IGetProjectResponse
 */
export class IGetProjectResponse {
  public succes: boolean;
  public data: ProjectDomainEntity | null;
}
