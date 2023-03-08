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
   * @return {*}  {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  createDescripcionProject(definitionId: string): Promise<Entity>;
  /**
   * Edita una descripción del proyecto
   *
   * @param {string} definitionId
   * @param {string} description
   * @return {*}  {Promise<Entity>}
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
   * @param {string} stateApprove
   * @return {*}  {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  editStateApproveProject(
    definitionId: string,
    stateApprove: string,
  ): Promise<Entity>;
  /**
   * Crea una fecha de finalización del proyecto
   *
   * @param {string} dateEnd
   * @return {*}  {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  addDateEnd(dateEnd: string): Promise<Entity>;
  /**
   * Edita una fecha de finalización del proyecto
   *
   * @param {string} dateEnd
   * @return {*}  {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  editDateEnd(dateEnd: string): Promise<Entity>;
  /**
   * registra una definicion del proyecto
   *
   * @param {string} definitionId
   * @param {string} description
   * @param {string} stateApprove
   * @param {Date} dateStart
   * @param {Date} dateEnd
   * @return {*}  {Promise<Entity>}
   * @memberof IDefinitionOfTheProjectDomainService
   */
  registerDefinitionProject(
    definitionId: string,
    description: string,
    stateApprove: string,
    dateStart: Date,
    dateEnd: Date,
  ): Promise<Entity>;
}
