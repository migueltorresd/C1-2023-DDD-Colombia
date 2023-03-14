import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { ReachOfTheProjectCreatedEventPublisher } from '../../../../../events/publishers/reach/reach-of-the-project-created.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId //  id de la definición del alcance
 * @param {string} definition // definición del alcance
 * @param {string} prioritize // prioridad del alcance
 * @param {string} stateDefinition // estado de la definición del alcance
 * @param {ReachOfTheProjectCreatedEventPublisher} event // evento de creación del alcance del proyecto
 * @param {IReachDomainService} [service] // servicio del dominio
 * @return {Promise<ReachDomainEntity>} // retorna la entidad del dominio
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
