import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { ProjectStatusEditedEventPublisher } from '../../../../../events/publishers/project/project-status-edited.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId
 * @param {boolean} stateApprove
 * @param {ProjectStatusEditedEventPublisher} event
 * @param {IProjectDomainService} [service]
 * @return {Promise<ProjectDomainEntity>}
 */
export const EditStateApproveHelper = async (
  projectId: string,
  stateApprove: boolean,
  event: ProjectStatusEditedEventPublisher,
  service?: IProjectDomainService,
): Promise<ProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.editStateApprove(projectId, stateApprove);
  event.publish();
  return event.response;
};
