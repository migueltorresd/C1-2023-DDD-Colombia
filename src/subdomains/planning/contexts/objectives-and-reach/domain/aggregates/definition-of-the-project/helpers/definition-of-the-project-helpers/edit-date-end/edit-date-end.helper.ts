import { DefinitionOfTheProjectDomainEntity } from '../../../../../entities/definition-of-the-project.domain-entity';
import { DateEndEditedEventPublisher } from '../../../../../events/publishers/definition-of-the-project/date-end-edited.event-publisher';
import { IDefinitionOfTheProjectDomainService } from '../../../../../services/definition-of-the-project.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId // id de la definición del proyecto
 * @param {Date} dateEnd // fecha de finalización del proyecto
 * @param {DateEndEditedEventPublisher} event // evento de edición de la descripción del proyecto
 * @param {IDefinitionOfTheProjectDomainService} [service] // servicio del dominio
 * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad del dominio
 */
export const EditDateEndHelper = async (
  definitionId: string,
  dateEnd: Date,
  event: DateEndEditedEventPublisher,
  service?: IDefinitionOfTheProjectDomainService,
): Promise<DefinitionOfTheProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.editDateEnd(definitionId, dateEnd);
  event.publish();
  return event.response;
};
