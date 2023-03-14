import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { PrioritizationEditedEventPublisher } from '../../../../../events/publishers/reach/prioritization-edited.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId // id de la definición del alcance
 * @param {string} prioritize // prioridad del alcance
 * @param {PrioritizationEditedEventPublisher} event // evento de edición de la prioridad del alcance
 * @param {IReachDomainService} [service] // servicio del dominio
 * @return {Promise<ReachDomainEntity>} // retorna la entidad del dominio
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
