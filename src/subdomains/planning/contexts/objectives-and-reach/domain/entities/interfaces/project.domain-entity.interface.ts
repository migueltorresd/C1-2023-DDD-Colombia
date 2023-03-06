import { BudgetObjectValue } from '../../value-objects/proyect/budget/budget.value-object';
import { NameObjectValue } from '../../value-objects/proyect/name/name.value-object';
import { ProjectIdValueObject } from '../../value-objects/proyect/project-id/project-id.value-object';
import { StateApproveObjectValue } from '../../value-objects/proyect/state-approve/state-approve.value-object';

export interface IProjectDomainEntity {
  projectId: string | ProjectIdValueObject;
  name: string | NameObjectValue;
  budget: number | BudgetObjectValue;
  StateApprove: boolean | StateApproveObjectValue;
}
