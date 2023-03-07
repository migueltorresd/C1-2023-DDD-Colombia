import { DateEndObjectValue } from '../../value-objects/Definition-the-project/date-end/date-end.value-object';
import { DateStartObjectValue } from '../../value-objects/Definition-the-project/date-start/date-start.value-object';
import { DefinitionProjectIdValueObject } from '../../value-objects/Definition-the-project/definition-project-id/definition-project-id.value-object';
import { DescriptionObjectValue } from '../../value-objects/Definition-the-project/description/description.value-object';
import { StateApproveObjectValue } from '../../value-objects/proyect/state-approve/state-approve.value-object';
import { IProjectDomainEntity } from './project.domain-entity.interface';
import { IReachDomainEntity } from './reach.domain-entity.interface';

/**
 * Interfaz que representa la entidad de dominio de definición del proyecto
 *
 * @export
 * @interface IDefinitionOfTheProjectDomainEntityInterface
 */
export interface IDefinitionOfTheProjectDomainEntityInterface {
  definitionId: string | DefinitionProjectIdValueObject;
  description: string | DescriptionObjectValue;
  stateApprove: boolean | StateApproveObjectValue;
  dateEnd: Date | DateEndObjectValue;
  dateStart: Date | DateStartObjectValue;
  reachs: IReachDomainEntity[];
  projects: IProjectDomainEntity[];
}
