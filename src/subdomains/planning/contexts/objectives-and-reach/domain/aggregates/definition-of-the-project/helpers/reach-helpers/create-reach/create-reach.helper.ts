import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { ReachOfTheProjectCreatedEventPublisher } from '../../../../../events/publishers/reach/reach-of-the-project-created.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId
 * @param {string} definition
 * @param {string} prioritize
 * @param {string} stateDefinition
 * @param {ReachOfTheProjectCreatedEventPublisher} event
 * @param {IReachDomainService} [service]
 * @return {Promise<ReachDomainEntity>}
 */
export const CreateReachHelper = async (
  definitionId: string,
  definition: string,
  prioritize: string,
  stateDefinition: string,
  event: ReachOfTheProjectCreatedEventPublisher,
  service?: IReachDomainService,
): Promise<ReachDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.createReach(
    definitionId,
    definition,
    prioritize,
    stateDefinition,
  );
  event.publish();
  return event.response;
};
