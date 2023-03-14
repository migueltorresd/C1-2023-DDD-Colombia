import { ReachDomainEntity } from '../entities/reach.domain-entity';

/**
 * Interfaz que representa el servicio de dominio de alcance
 *
 * @export
 * @interface IReachDomainService // interfaz que representa el servicio de dominio de alcance
 * @template Entity // extiende de la entidad de dominio de alcance
 */
export interface IReachDomainService<
  Entity extends ReachDomainEntity = ReachDomainEntity,
> {
  /**
   * Crea un alcance
   *
   * @param {string} definitionId // id de la definición
   * @param {string} definition // definición
   * @param {string} prioritize // prioridad
   * @param {string} stateDefinition // estado de la definición
   * @return {Promise<Entity>} // retorna una entidad de dominio de alcance
   * @memberof IReachDomainService // este metodo es el que se usa para crear un alcance
   */
  createReach(
    definitionId: string,
    definition: string,
    prioritize: string,
    stateDefinition: string,
  ): Promise<Entity>;
  /**
   * Edita una definición
   *
   * @param {string} definitionId // id de la definición
   * @param {string} definition // definición
   * @return {Promise<Entity>} // retorna una entidad de dominio de alcance
   * @memberof IReachDomainService // este metodo es el que se usa para editar una definición
   */
  editDefinition(definitionId: string, definition: string): Promise<Entity>;
  /**
   * Edita una prioridad
   *
   * @param {string} definitionId // id de la definición
   * @param {string} prioritize // prioridad
   * @return {Promise<Entity>} // retorna una entidad de dominio de alcance
   * @memberof IReachDomainService // este metodo es el que se usa para editar una prioridad
   */
  editPrioritize(definitionId: string, prioritize: string): Promise<Entity>;
  /**
   * Edita el estado de la definición
   *
   * @param {string} definitionId // id de la definición
   * @param {string} stateDefinition // estado de la definición
   * @return {Promise<Entity>} // retorna una entidad de dominio de alcance
   * @memberof IReachDomainService //
   */
  editStateDefinition(
    definitionId: string,
    stateDefinition: string,
  ): Promise<Entity>;
}
