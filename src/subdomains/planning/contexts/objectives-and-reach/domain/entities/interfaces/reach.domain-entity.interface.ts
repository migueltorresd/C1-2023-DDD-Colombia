import { DefinitionIdValueObject } from '../../value-objects/reach/definition-id/definition-id.value-object';
import { DefinitionValueObject } from '../../value-objects/reach/definition/definition.value-object';
import { PrioritizeValueObject } from '../../value-objects/reach/prioritize/prioritize.value-object';
import { StateDefinitionValueObject } from '../../value-objects/reach/state-definition/state-definition.value-object';

export interface IReachDomainEntity {
  definitionId?: string | DefinitionIdValueObject;
  definition?: string | DefinitionValueObject;
  prioritize?: string | PrioritizeValueObject;
  stateDefinition?: string | StateDefinitionValueObject;
}
