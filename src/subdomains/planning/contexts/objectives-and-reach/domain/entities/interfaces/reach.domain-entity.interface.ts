import { DefinitionValueObject } from '../../value-objects/reach/definition/definition.value-object';
import { PrioritizeValueObject } from '../../value-objects/reach/prioritize/prioritize.value-object';
import { ReachIdValueObject } from '../../value-objects/reach/reach-id/reach-id.value-object';
import { StateDefinitionValueObject } from '../../value-objects/reach/state-definition/state-definition.value-object';
import { IDefinitionOfTheProjectDomainInterface } from './definition-of-the-project.domain-entity.interface';

/**
 * Interfaz que representa la entidad de dominio de alcance
 *
 * @export
 * @interface IReachDomainInterface
 */
export interface IReachDomainInterface {
  reachId?: string | ReachIdValueObject;
  definition?: string | DefinitionValueObject;
  prioritize?: string | PrioritizeValueObject;
  stateDefinition?: boolean | StateDefinitionValueObject;
  definitionOfTheProject?: IDefinitionOfTheProjectDomainInterface;
}
