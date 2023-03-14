import { BudgetObjectValue } from '../../value-objects/proyect/budget/budget.value-object';
import { NameObjectValue } from '../../value-objects/proyect/name/name.value-object';
import { ProjectIdValueObject } from '../../value-objects/proyect/project-id/project-id.value-object';
import { StateApproveObjectValue } from '../../value-objects/proyect/state-approve/state-approve.value-object';
import { IDefinitionOfTheProjectDomainInterface } from './definition-of-the-project.domain-entity.interface';

/**
 * Interfaz que representa la entidad de dominio de proyecto
 *
 * @export
 * @interface IProjectDomainInterface // interfaz que representa la entidad de dominio de proyecto
 */
export interface IProjectDomainInterface {
  projectId?: string | ProjectIdValueObject;
  name?: string | NameObjectValue;
  budget?: number | BudgetObjectValue;
  StateApprove?: boolean | StateApproveObjectValue;
  definitionOfTheProject?: IDefinitionOfTheProjectDomainInterface;
}
