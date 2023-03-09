import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { EditedStateDefinitionEventPublisher } from '../../../../../events/publishers/reach/edited-state-definition.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId
 * @param {string} stateDefinition
 * @param {EditedStateDefinitionEventPublisher} event
 * @param {IReachDomainService} [service]
 * @return {Promise<ReachDomainEntity>}
 */
export const EditStateDefinitionHelper = async (
  definitionId: string,
  stateDefinition: string,
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
