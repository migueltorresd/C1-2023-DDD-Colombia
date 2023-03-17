import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { ProjectObtainedEventPublisher } from '../../../../../events/publishers/project/project-obtained.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId // id del proyecto
 * @param {ProjectObtainedEventPublisher} event // evento de obtención del proyecto
 * @param {IProjectDomainService} [service] // servicio del dominio
 * @return {Promise<ProjectDomainEntity>} // retorna la entidad del dominio
 */
export const GetProjectByIdHelper = async (
  projectId: string,
  event: ProjectObtainedEventPublisher,
  service: IProjectDomainService,
): Promise<ProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.getProjectById(projectId);
  event.publish();
  return event.response;
};
