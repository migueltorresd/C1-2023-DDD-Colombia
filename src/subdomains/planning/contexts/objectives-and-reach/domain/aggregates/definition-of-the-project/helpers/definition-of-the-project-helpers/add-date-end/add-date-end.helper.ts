import { DefinitionOfTheProjectDomainEntity } from '../../../../../entities/definition-of-the-project.domain-entity';
import { AddedEndDateEventPublisher } from '../../../../../events/publishers/definition-of-the-project/added-end-date.event-publisher';
import { IDefinitionOfTheProjectDomainService } from '../../../../../services/definition-of-the-project.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId
 * @param {Date} dateEnd
 * @param {AddedEndDateEventPublisher} event
 * @param {IDefinitionOfTheProjectDomainService} [service]
 * @return {*}  {Promise<DefinitionOfTheProjectDomainEntity>}
 */
export const AddDateEndHelper = async (
  definitionId: string,
  dateEnd: Date,
  event: AddedEndDateEventPublisher,
  service?: IDefinitionOfTheProjectDomainService,
): Promise<DefinitionOfTheProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.addDateEnd(definitionId, dateEnd);
  event.publish();
  return event.response;
};
