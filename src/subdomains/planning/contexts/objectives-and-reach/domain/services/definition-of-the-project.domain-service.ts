import { DefinitionOfTheProjectDomainEntity } from '../entities/definition-of-the-project.domain-entity';

/**
 * Interfaz que representa el servicio de dominio de definición del proyecto
 *
 * @export
 * @interface IDefinitionOfTheProjectDomainService // interfaz que representa el servicio de dominio de definición del proyecto
 * @template Entity // extiende de la entidad de dominio de definición del proyecto
 */
export interface IDefinitionOfTheProjectDomainService<
  Entity extends DefinitionOfTheProjectDomainEntity = DefinitionOfTheProjectDomainEntity,
> {
  /**
   * Crea una descripción del proyecto
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} description // descripción del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de definición del proyecto
   * @memberof IDefinitionOfTheProjectDomainService // este metodo es el que se usa para crear la descripción del proyecto
  createDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<Entity>;
  /**
   * Edita una descripción del proyecto
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} description // descripción del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de definición del proyecto
   * @memberof IDefinitionOfTheProjectDomainService // este metodo es el que se usa para editar la descripción del proyecto
   */
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<Entity>;
  /**
   * edita el estado de aprobación del proyecto
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {boolean} stateApprove // estado de aprobación del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de definición del proyecto
   * @memberof IDefinitionOfTheProjectDomainService // este metodo es el que se usa para editar el estado de aprobación del proyecto
   */
  editStateApproveProject(
    definitionId: string,
    stateApprove: boolean,
  ): Promise<Entity>;

  /**
   * Agrega una fecha de inicio del proyecto
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {date} dateEnd // fecha de inicio del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de definición del proyecto
   * @memberof IDefinitionOfTheProjectDomainService // este metodo es el que se usa para agregar la fecha de inicio del proyecto
   */
  addDateEnd(definitionId: string, dateEnd: Date): Promise<Entity>;

  /**
   * Edita una fecha de inicio del proyecto
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {date} dateEnd // fecha de inicio del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de definición del proyecto
   * @memberof IDefinitionOfTheProjectDomainService // este metodo es el que se usa para editar la fecha de inicio del proyecto
   */
  editDateEnd(definitionId: string, dateEnd: Date): Promise<Entity>;
  /**
   * registra una definicion del proyecto
   *
   * @param {string} definitionId // id de la definición del proyecto
   * @param {string} description // descripción del proyecto
   * @param {boolean} stateApprove // estado de aprobación del proyecto
   * @param {Date} dateStart // fecha de inicio del proyecto
   * @param {Date} dateEnd // fecha de fin del proyecto
   * @return {Promise<Entity>} // retorna una entidad de dominio de definición del proyecto
   * @memberof IDefinitionOfTheProjectDomainService // este metodo es el que se usa para registrar una definición del proyecto
   */
  registerDefinitionProject(
    entity: DefinitionOfTheProjectDomainEntity,
  ): Promise<Entity>;
}
