import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { PrioritizationEditedEventPublisher } from '../../../../../events/publishers/reach/prioritization-edited.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId
 * @param {string} prioritize
 * @param {PrioritizationEditedEventPublisher} event
 * @param {IReachDomainService} [service]
 * @return {Promise<ReachDomainEntity>}
 */
export const EditPrioritizeHelper = async (
  definitionId: string,
  prioritize: string,
  event: PrioritizationEditedEventPublisher,
  service?: IReachDomainService,
): Promise<ReachDomainEntity> => {
  if (!service) throw new Error(' El servicio no está definido');
  if (!event) throw new Error('El evento no está definido');
  event.response = await service.editPrioritize(definitionId, prioritize);
  event.publish();
  return event.response;
};
