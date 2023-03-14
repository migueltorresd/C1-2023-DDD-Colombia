import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { NameEditedEventPublisher } from '../../../../../events/publishers/project/name-edited.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId // id del proyecto
 * @param {string} name // nombre del proyecto
 * @param {NameEditedEventPublisher} event // evento de edición del nombre del proyecto
 * @param {IProjectDomainService} [service] // servicio del dominio
 * @return {Promise<ProjectDomainEntity>} // retorna la entidad del dominio
 */
export const EditNameHelper = async (
  projectId: string,
  name: string,
  event: NameEditedEventPublisher,
  service?: IProjectDomainService,
): Promise<ProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.editName(projectId, name);
  event.publish();
  return event.response;
};
