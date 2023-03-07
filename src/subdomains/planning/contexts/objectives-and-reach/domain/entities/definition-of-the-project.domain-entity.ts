import { DateEndObjectValue } from '../value-objects/Definition-the-project/date-end/date-end.value-object';
import { DateStartObjectValue } from '../value-objects/Definition-the-project/date-start/date-start.value-object';
import { DefinitionProjectIdValueObject } from '../value-objects/Definition-the-project/definition-project-id/definition-project-id.value-object';
import { DescriptionObjectValue } from '../value-objects/Definition-the-project/description/description.value-object';
import { StateApproveObjectValue } from '../value-objects/proyect/state-approve/state-approve.value-object';
import { IDefinitionOfTheProjectDomainEntityInterface } from './interfaces/definition-of-the-project.domain-entity.interface';
import { IProjectDomainEntity } from './interfaces/project.domain-entity.interface';
import { IReachDomainEntity } from './interfaces/reach.domain-entity.interface';

/**
 * Esta clase que representa la entidad de dominio de definición del proyecto para esto implementa la Interface correspondiente
 *
 * @export
 * @class DefinitionOfTheProjectDomainEntity
 * @implements {IDefinitionOfTheProjectDomainEntityInterface}
 */
export class DefinitionOfTheProjectDomainEntity
  implements IDefinitionOfTheProjectDomainEntityInterface
{
  definitionId: string | DefinitionProjectIdValueObject;
  description: string | DescriptionObjectValue;
  stateApprove: boolean | StateApproveObjectValue;
  dateEnd: Date | DateEndObjectValue;
  dateStart: Date | DateStartObjectValue;

  /**
   * crea una instancia de la clase DefinitionOfTheProjectDomainEntity.
   * @param {IDefinitionOfTheProjectDomainEntityInterface} [data]
   * @memberof DefinitionOfTheProjectDomainEntity
   */
  constructor(data?: IDefinitionOfTheProjectDomainEntityInterface) {
    if (data?.definitionId) this.definitionId = data.definitionId;
    if (data?.description) this.description = data.description;
    if (data?.stateApprove) this.stateApprove = data.stateApprove;
    if (data?.dateEnd) this.dateEnd = data.dateEnd;
    if (data?.dateStart) this.dateStart = data.dateStart;
  }
  reachs: IReachDomainEntity[];
  projects: IProjectDomainEntity[];
}
