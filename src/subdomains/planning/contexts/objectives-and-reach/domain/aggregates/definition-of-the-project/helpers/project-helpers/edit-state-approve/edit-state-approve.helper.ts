import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { ProjectStatusEditedEventPublisher } from '../../../../../events/publishers/project/project-status-edited.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId // id del proyecto
 * @param {boolean} stateApprove // estado de aprobación del proyecto
 * @param {ProjectStatusEditedEventPublisher} event // evento de edición del estado de aprobación del proyecto
 * @param {IProjectDomainService} [service] // servicio del dominio
 * @return {Promise<ProjectDomainEntity>} // retorna la entidad del dominio
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
