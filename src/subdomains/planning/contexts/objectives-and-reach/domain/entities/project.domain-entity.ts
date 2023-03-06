import { BudgetObjectValue } from '../value-objects/proyect/budget/budget.value-object';
import { NameObjectValue } from '../value-objects/proyect/name/name.value-object';
import { ProjectIdValueObject } from '../value-objects/proyect/project-id/project-id.value-object';
import { StateApproveObjectValue } from '../value-objects/proyect/state-approve/state-approve.value-object';
import { IProjectDomainEntity } from './interfaces/project.domain-entity.interface';

export class ProjectDomainEntity implements IProjectDomainEntity {
  projectId: string | ProjectIdValueObject;
  name: string | NameObjectValue;
  budget: number | BudgetObjectValue;
  StateApprove: boolean | StateApproveObjectValue;

  constructor(data?: IProjectDomainEntity) {
    if (data?.projectId) this.projectId = data.projectId;
    if (data?.name) this.name = data.name;
    if (data?.budget) this.budget = data.budget;
    if (data?.StateApprove) this.StateApprove = data.StateApprove;
  }
}
