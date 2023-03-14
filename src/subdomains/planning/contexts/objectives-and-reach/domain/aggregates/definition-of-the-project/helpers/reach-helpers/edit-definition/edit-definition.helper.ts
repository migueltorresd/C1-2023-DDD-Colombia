import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { EditedReachDefinitionEventPublisher } from '../../../../../events/publishers/reach/edited-reach-definition.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId //  id de la definición del alcance
 * @param {string} definition // definición del alcance
 * @param {EditedReachDefinitionEventPublisher} event // evento de edición de la definición del alcance
 * @param {IReachDomainService} [service] // servicio del dominio
 * @return {Promise<ReachDomainEntity>} // retorna la entidad del dominio
 */
export const EditDefinitionHelper = async (
  definitionId: string,
  definition: string,
  event: EditedReachDefinitionEventPublisher,
  service?: IReachDomainService,
): Promise<ReachDomainEntity> => {
  if (!service) throw new Error(' El servicio no está definido');
  if (!event) throw new Error('El evento no está definido');
  event.response = await service.editDefinition(definitionId, definition);
  event.publish();
  return event.response;
};
