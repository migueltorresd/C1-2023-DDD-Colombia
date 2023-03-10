import { DefinitionOfTheProjectDomainEntity } from '../entities/definition-of-the-project.domain-entity';

/**
 * Interfaz que representa el servicio de dominio de definición del proyecto
 *
 * @export
 * @interface IDefinitionOfTheProjectDomainService
 * @template Entity
 */
export interface IDefinitionOfTheProjectDomainService<
  Entity extends DefinitionOfTheProjectDomainEntity = DefinitionOfTheProjectDomainEntity,
> {
  /**
   * Crea una descripción del proyecto
   *
   * @param {string} definitionId
   * @param {string} description
   * @return {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  createDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<Entity>;
  /**
   * Edita una descripción del proyecto
   *
   * @param {string} definitionId
   * @param {string} description
   * @return {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<Entity>;
  /**
   * edita el estado de aprobación del proyecto
   *
   * @param {string} definitionId
   * @param {boolean} stateApprove
   * @return {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  editStateApproveProject(
    definitionId: string,
    stateApprove: boolean,
  ): Promise<Entity>;

  /**
   * Agrega una fecha de inicio del proyecto
   *
   * @param {string} definitionId
   * @param {date} dateEnd
   * @return {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  addDateEnd(definitionId: string, dateEnd: Date): Promise<Entity>;

  /**
   * Edita una fecha de inicio del proyecto
   *
   * @param {string} definitionId
   * @param {date} dateEnd
   * @return {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  editDateEnd(definitionId: string, dateEnd: Date): Promise<Entity>;
  /**
   * registra una definicion del proyecto
   *
   * @param {string} definitionId
   * @param {string} description
   * @param {boolean} stateApprove
   * @param {Date} dateStart
   * @param {Date} dateEnd
   * @return {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  registerDefinitionProject(
    entity: DefinitionOfTheProjectDomainEntity,
  ): Promise<Entity>;
}
