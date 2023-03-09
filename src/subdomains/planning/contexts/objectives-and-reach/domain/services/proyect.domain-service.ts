import { ProjectDomainEntity } from '../entities/project.domain-entity';

/**
 * Interfaz que representa el servicio de dominio de proyecto
 *
 * @export
 * @interface IProyectDomainService
 * @template Entity
 */
export interface IProjectDomainService<
  Entity extends ProjectDomainEntity = ProjectDomainEntity,
> {
  /**
   * Crea un proyecto
   *
   * @param {string} [projectId]
   * @param {string} [name]
   * @param {number} [budget]
   * @param {boolean} [stateApprove]
   * @return {*}  {Promise<Entity>}
   * @memberof IProyectDomainService
   */
  createProject(
    projectId?: string,
    name?: string,
    budget?: number,
    stateApprove?: boolean,
  ): Promise<Entity>;
  /**
   * Edita el nombre del proyecto
   *
   * @param {string} [projectId]
   * @param {string} [name]
   * @return {*}  {Promise<Entity>}
   * @memberof IProyectDomainService
   */
  editName(projectId?: string, name?: string): Promise<Entity>;
  /**
   * Edita el presupuesto del proyecto
   *
   * @param {string} [projectId]
   * @param {number} [budget]
   * @return {*}  {Promise<Entity>}
   * @memberof IProyectDomainService
   */
  editBudget(projectId?: string, budget?: number): Promise<Entity>;
  /**
   * Edita el estado de aprobación del proyecto
   *
   * @param {string} [projectId]
   * @param {boolean} [stateApprove]
   * @return {*}  {Promise<Entity>}
   * @memberof IProyectDomainService
   */
  editStateApprove(projectId?: string, stateApprove?: boolean): Promise<Entity>;
  /**
   * Obtiene un proyecto por su id
   *
   * @param {string} [projectId]
   * @param {string} [name]
   * @param {number} [budget]
   * @param {boolean} [stateApprove]
   * @return {*}  {Promise<Entity>}
   * @memberof IProyectDomainService
   */
  getProjectById(
    projectId?: string,
    name?: string,
    budget?: number,
    stateApprove?: boolean,
  ): Promise<Entity>;
}
