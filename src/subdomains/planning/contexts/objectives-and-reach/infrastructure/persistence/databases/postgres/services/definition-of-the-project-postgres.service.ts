import { Injectable } from '@nestjs/common';
import { IDefinitionOfTheProjectDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/definition-of-the-project.domain-service';
import { DefinitionOfTheProjectPostgresEntity } from '../entities/definition-of-the-project-postgres.entity';
import { DefinitionOfTheProjectRepository } from '../repositories/definition-of-the-project.repository';
/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class DefinitionOfTheProjectPostgresService 
 * @implements {IDefinitionOfTheProjectDomainService<DefinitionOfTheProjectPostgresEntity>}
 */
@Injectable()
export class DefinitionOfTheProjectPostgresService
  implements
    IDefinitionOfTheProjectDomainService<DefinitionOfTheProjectPostgresEntity>
{
  constructor(
    private readonly definitionOfTheProjectRepository: DefinitionOfTheProjectRepository,
  ) {}
  /**
   * obtiene la definicion del proyecto
   *
   * @param {string} definitionId //id de la definicion del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // definicion del proyecto
   * @memberof DefinitionOfTheProjectPostgresService
   */
  getDefinitionOfTheProject(
    definitionId: string,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    return this.definitionOfTheProjectRepository.findOneById(definitionId);
  }
  /**
   * crea la definicion del proyecto
   *
   * @param {string} definitionId //id de la definicion del proyecto
   * @param {string} description // descripcion del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // definicion del proyecto
   * @memberof DefinitionOfTheProjectPostgresService
   */
  createDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.description = description;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  /**
   * agrega la fecha de inicio del proyecto
   *
   * @param {string} definitionId
   * @param {Date} dateEnd
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>}
   * @memberof DefinitionOfTheProjectPostgresService
   */
  addDateEnd(
    definitionId: string,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.dateEnd = dateEnd;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  /**
   * agrega la fecha de fin del proyecto
   *
   * @param {string} definitionId //id de la definicion del proyecto
   * @param {Date} dateEnd // fecha de fin del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>}// definicion del proyecto
   * @memberof DefinitionOfTheProjectPostgresService
   */
  editDateEnd(
    definitionId: string,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.dateEnd = dateEnd;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  /**
   * agrega la fecha de inicio del proyecto
   *
   * @param {string} definitionId //id de la definicion del proyecto
   * @param {string} description // descripcion del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // definicion del proyecto
   * @memberof DefinitionOfTheProjectPostgresService
   */
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.description = description;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  /**
   *  agrega el estado de aprobacion del proyecto
   *
   * @param {string} definitionId //id de la definicion del proyecto
   * @param {boolean} stateApprove // estado de aprobacion del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // definicion del proyecto
   * @memberof DefinitionOfTheProjectPostgresService
   */
  editStateApproveProject(
    definitionId: string,
    stateApprove: boolean,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.stateApprove = stateApprove;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  /**
   * agrega el estado de aprobacion del proyecto
   *
   * @param {DefinitionOfTheProjectPostgresEntity} entity  //   definicion del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // definicion del proyecto
   * @memberof DefinitionOfTheProjectPostgresService
   */
  registerDefinitionProject(
    entity: DefinitionOfTheProjectPostgresEntity,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    return this.definitionOfTheProjectRepository.create(entity);
  }
  /**
   * obtiene la definicion del proyecto por id
   *
   * @param {string} definitionId //id de la definicion del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // definicion del proyecto
   * @memberof DefinitionOfTheProjectPostgresService
   */
  getDefinitionOfTheProjectById(
    definitionId: string,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    return this.definitionOfTheProjectRepository.findOneById(definitionId);
  }
}
