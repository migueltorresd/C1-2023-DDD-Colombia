import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { ProjectObtainedEventPublisher } from '../../../../../events/publishers/project/project-obtained.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId
 * @param {string} name
 * @param {number} budget
 * @param {boolean} stateApprove
 * @param {ProjectObtainedEventPublisher} event
 * @param {IProjectDomainService} [service]
 * @return {Promise<ProjectDomainEntity>}
 */
export const GetProjectByIdHelper = async (
  projectId: string,
  name: string,
  budget: number,
  stateApprove: boolean,
  event: ProjectObtainedEventPublisher,
  service?: IProjectDomainService,
): Promise<ProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.getProjectById(
    projectId,
    name,
    budget,
    stateApprove,
  );
  event.publish();
  return event.response;
};
