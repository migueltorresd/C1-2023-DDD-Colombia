import { DateEndObjectValue } from '../value-objects/Definition-the-project/date-end/date-end.value-object';
import { DateStartObjectValue } from '../value-objects/Definition-the-project/date-start/date-start.value-object';
import { DefinitionProjectIdValueObject } from '../value-objects/Definition-the-project/definition-project-id/definition-project-id.value-object';
import { DescriptionObjectValue } from '../value-objects/Definition-the-project/description/description.value-object';
import { StateApproveObjectValue } from '../value-objects/proyect/state-approve/state-approve.value-object';
import { IDefinitionOfTheProjectDomainInterface } from './interfaces/definition-of-the-project.domain-entity.interface';

import { ProjectDomainEntity } from './project.domain-entity';
import { ReachDomainEntity } from './reach.domain-entity';

/**
 * Esta clase que representa la entidad de dominio de definición del proyecto para esto implementa la Interface correspondiente
 *
 * @export
 * @class DefinitionOfTheProjectDomainEntity // clase que representa la entidad de dominio de definición del proyecto
 * @implements {IDefinitionOfTheProjectDomainInterface} // implementa la interface correspondiente
 */
export class DefinitionOfTheProjectDomainEntity
  implements IDefinitionOfTheProjectDomainInterface
{
  definitionId: string | DefinitionProjectIdValueObject;
  description: string | DescriptionObjectValue;
  stateApprove: boolean | StateApproveObjectValue;
  dateEnd: Date | DateEndObjectValue;
  dateStart: Date | DateStartObjectValue;
  reachs: ReachDomainEntity[];
  projects: ProjectDomainEntity[];

  /**
   * crea una instancia de la clase DefinitionOfTheProjectDomainEntity. // crea una instancia de la clase DefinitionOfTheProjectDomainEntity
   * @param {IDefinitionOfTheProjectDomainInterface} [data] // parámetro opcional de tipo IDefinitionOfTheProjectDomainInterface
   * @memberof DefinitionOfTheProjectDomainEntity // instancia de la clase DefinitionOfTheProjectDomainEntity
   */
  constructor(data?: IDefinitionOfTheProjectDomainInterface) {
    if (data?.definitionId) this.definitionId = data.definitionId;
    if (data?.description) this.description = data.description;
    if (data?.stateApprove) this.stateApprove = data.stateApprove;
    if (data?.dateEnd) this.dateEnd = data.dateEnd;
    if (data?.dateStart) this.dateStart = data.dateStart;
  }
}
