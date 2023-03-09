import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { ProjectCreatedEventPublisher } from '../../../../../events/publishers/project/project-created.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId
 * @param {string} name
 * @param {number} budget
 * @param {boolean} stateApprove
 * @param {ProjectCreatedEventPublisher} event
 * @param {IProjectDomainService} [service]
 * @return {Promise<ProjectDomainEntity>}
 */
export const createProjectHelper = async (
  projectId: string,
  name: string,
  budget: number,
  stateApprove: boolean,
  event: ProjectCreatedEventPublisher,
  service?: IProjectDomainService,
): Promise<ProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.createProject(
    projectId,
    name,
    budget,
    stateApprove,
  );
  event.publish();
  return event.response;
};
