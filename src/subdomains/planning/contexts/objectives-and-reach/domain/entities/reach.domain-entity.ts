import { DefinitionIdValueObject } from '../value-objects/reach/definition-id/definition-id.value-object';
import { DefinitionValueObject } from '../value-objects/reach/definition/definition.value-object';
import { PrioritizeValueObject } from '../value-objects/reach/prioritize/prioritize.value-object';
import { StateDefinitionValueObject } from '../value-objects/reach/state-definition/state-definition.value-object';
import { IReachDomainEntity } from './interfaces/reach.domain-entity.interface';

export class ReachDomainEntity implements IReachDomainEntity {
  definitionId?: string | DefinitionIdValueObject;
  definition?: string | DefinitionValueObject;
  prioritize?: string | PrioritizeValueObject;
  stateDefinition?: string | StateDefinitionValueObject;

  constructor(data?: IReachDomainEntity) {
    if (data?.definitionId) this.definitionId = data.definitionId;
    if (data?.definition) this.definition = data.definition;
    if (data?.prioritize) this.prioritize = data.prioritize;
    if (data?.stateDefinition) this.stateDefinition = data.stateDefinition;
  }
}
