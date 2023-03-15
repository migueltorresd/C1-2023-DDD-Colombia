import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { EditedStateDefinitionEventPublisher } from '../../../../../events/publishers/reach/edited-state-definition.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId //  id de la definición del alcance
 * @param {string} stateDefinition // estado de la definición del alcance
 * @param {EditedStateDefinitionEventPublisher} event // evento de edición del estado de la definición del alcance
 * @param {IReachDomainService} [service] // servicio del dominio
 * @return {Promise<ReachDomainEntity>} // retorna la entidad del dominio
 */
export const EditStateDefinitionHelper = async (
  definitionId: string,
  stateDefinition: boolean,
  event: EditedStateDefinitionEventPublisher,
  service?: IReachDomainService,
): Promise<ReachDomainEntity> => {
  if (!service) throw new Error(' El servicio no está definido');
  if (!event) throw new Error('El evento no está definido');
  event.response = await service.editStateDefinition(
    definitionId,
    stateDefinition,
  );
  event.publish();
  return event.response;
};
