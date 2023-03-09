import { DefinitionOfTheProjectDomainEntity } from '../../../../../entities/definition-of-the-project.domain-entity';
import { DateEndEditedEventPublisher } from '../../../../../events/publishers/definition-of-the-project/date-end-edited.event-publisher';
import { IDefinitionOfTheProjectDomainService } from '../../../../../services/definition-of-the-project.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId
 * @param {string} dateEnd
 * @param {DateEndEditedEventPublisher} event
 * @param {IDefinitionOfTheProjectDomainService} [service]
 * @return {*}  {Promise<DefinitionOfTheProjectDomainEntity>}
 */
export const EditDateEndHelper = async (
  definitionId: string,
  dateEnd: string,
  event: DateEndEditedEventPublisher,
  service?: IDefinitionOfTheProjectDomainService,
): Promise<DefinitionOfTheProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.editDateEnd(definitionId, dateEnd);
  event.publish();
  return event.response;
};
