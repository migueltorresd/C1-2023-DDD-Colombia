import { DefinitionValueObject } from '../value-objects/reach/definition/definition.value-object';
import { PrioritizeValueObject } from '../value-objects/reach/prioritize/prioritize.value-object';
import { ReachIdValueObject } from '../value-objects/reach/reach-id/reach-id.value-object';
import { StateDefinitionValueObject } from '../value-objects/reach/state-definition/state-definition.value-object';
import { IDefinitionOfTheProjectDomainInterface } from './interfaces/definition-of-the-project.domain-entity.interface';
import { IReachDomainInterface } from './interfaces/reach.domain-entity.interface';
/**
 * Clase que representa la entidad de dominio de alcance para esto implementa la interfaz IReachDomainEntity
 *
 * @export
 * @class ReachDomainEntity // clase que representa la entidad de dominio de alcance
 * @implements {IReachDomainInterface} // implementa la interfaz IReachDomainInterface
 */
export class ReachDomainEntity implements IReachDomainInterface {
  reachId?: string | ReachIdValueObject;
  definition?: string | DefinitionValueObject;
  prioritize?: string | PrioritizeValueObject;
  stateDefinition?: boolean | StateDefinitionValueObject;
  definitionOfTheProject?: IDefinitionOfTheProjectDomainInterface;
  /**
   * se crea la instancia de ReachDomainEntity.
   * @param {IReachDomainInterface} [data] // parámetro opcional de tipo IReachDomainInterface
   * @memberof ReachDomainInterface //  instancia de la clase ReachDomainInterface
   */
  constructor(data?: IReachDomainInterface) {
    if (data?.reachId) this.reachId = data.reachId;
    if (data?.definition) this.definition = data.definition;
    if (data?.prioritize) this.prioritize = data.prioritize;
    if (data?.stateDefinition) this.stateDefinition = data.stateDefinition;
  }
}
