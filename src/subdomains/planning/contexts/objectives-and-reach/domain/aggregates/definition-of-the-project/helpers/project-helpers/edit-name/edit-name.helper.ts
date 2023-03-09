import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { NameEditedEventPublisher } from '../../../../../events/publishers/project/name-edited.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId
 * @param {string} name
 * @param {NameEditedEventPublisher} event
 * @param {IProjectDomainService} [service]
 * @return {*}  {Promise<ProjectDomainEntity>}
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
