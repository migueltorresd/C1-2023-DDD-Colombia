import { BudgetObjectValue } from '../value-objects/proyect/budget/budget.value-object';
import { NameObjectValue } from '../value-objects/proyect/name/name.value-object';
import { ProjectIdValueObject } from '../value-objects/proyect/project-id/project-id.value-object';
import { StateApproveObjectValue } from '../value-objects/proyect/state-approve/state-approve.value-object';
import { DefinitionOfTheProjectDomainEntity } from './definition-of-the-project.domain-entity';
import { IProjectDomainInterface } from './interfaces/project.domain-entity.interface';

/**
 * Clase que representa la entidad de dominio de proyecto para eso implementa la interfaz IProjectDomainEntity
 *
 * @export
 * @class ProjectDomainEntity // clase que representa la entidad de dominio de proyecto
 * @implements {IProjectDomainEntity} // implementa la interfaz IProjectDomainEntity
 */
export class ProjectDomainEntity implements IProjectDomainInterface {
  projectId?: string | ProjectIdValueObject;
  name?: string | NameObjectValue;
  budget?: number | BudgetObjectValue;
  stateApprove?: boolean | StateApproveObjectValue;
  definitionOfTheProject?: DefinitionOfTheProjectDomainEntity;
  /**
   * se crea una instancia de ProjectDomainEntity. // se crea una instancia de ProjectDomainEntity
   * @param {IProjectDomainInterface} [data] // parámetro opcional de tipo IProjectDomainInterface
   * @memberof ProjectDomainEntity // instancia de la clase ProjectDomainEntity
   */
  constructor(data?: IProjectDomainInterface) {
    if (data?.projectId) this.projectId = data.projectId;
    if (data?.name) this.name = data.name;
    if (data?.budget) this.budget = data.budget;
    if (data?.stateApprove) this.stateApprove = data.stateApprove;
  }
}
