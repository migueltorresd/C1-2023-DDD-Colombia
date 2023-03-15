import { ProjectDomainEntity } from '../entities/project.domain-entity';

/**
 * Interfaz que representa el servicio de dominio de proyecto
 *
 * @export
 * @interface IProyectDomainService // interfaz que representa el servicio de dominio de proyecto
 * @template Entity // extiende de la entidad de dominio de proyecto
 */
export interface IProjectDomainService<
  Entity extends ProjectDomainEntity = ProjectDomainEntity,
> {
  /**
   * Crea un proyecto
   *
   * @param {string} [projectId] // id del proyecto
   * @param {string} [name] // nombre del proyecto
   * @param {number} [budget] // presupuesto del proyecto
   * @param {boolean} [stateApprove] // estado de aprobación del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de proyecto
   * @memberof IProyectDomainService // este metodo es el que se usa para crear un proyecto
   */
  createProject(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<Entity>;
  /**
   * Edita el nombre del proyecto
   *
   * @param {string} [projectId] // id del proyecto
   * @param {string} [name] // nombre del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de proyecto
   * @memberof IProyectDomainService // este metodo es el que se usa para editar el nombre del proyecto
   */
  editName(projectId: string, name: string): Promise<Entity>;
  /**
   * Edita el presupuesto del proyecto
   *
   * @param {string} [projectId] // id del proyecto
   * @param {number} [budget]  // presupuesto del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de proyecto
   * @memberof IProyectDomainService // este metodo es el que se usa para editar el presupuesto del proyecto
   */
  editBudget(projectId: string, budget: number): Promise<Entity>;
  /**
   * Edita el estado de aprobación del proyecto
   *
   * @param {string} [projectId] // id del proyecto
   * @param {boolean} [stateApprove] // estado de aprobación del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de proyecto
   * @memberof IProyectDomainService // este metodo es el que se usa para editar el estado de aprobación del proyecto
   */
  editStateApprove(projectId: string, stateApprove: boolean): Promise<Entity>;
  /**
   * Obtiene un proyecto por su id
   *
   * @param {string} [projectId] // id del proyecto
   * @param {string} [name] // nombre del proyecto
   * @param {number} [budget] // presupuesto del proyecto
   * @param {boolean} [stateApprove] // estado de aprobación del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de proyecto
   * @memberof IProyectDomainService // este metodo es el que se usa para obtener un proyecto por su id
   */
  getProjectById(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<Entity>;
}
