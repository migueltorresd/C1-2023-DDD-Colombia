import { DefinitionOfTheProjectDomainEntity } from '../../../../../entities/definition-of-the-project.domain-entity';
import { ProjectDescriptionEditedEventPublisher } from '../../../../../events/publishers/definition-of-the-project/project-description-edited.event-publisher';
import { IDefinitionOfTheProjectDomainService } from '../../../../../services/definition-of-the-project.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId // id del proyecto
 * @param {string} description // descripción del proyecto
 * @param {ProjectDescriptionEditedEventPublisher} event // evento de edición de la descripción del proyecto
 * @param {IDefinitionOfTheProjectDomainService} [service] // servicio del dominio
 * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad del dominio
 */
export const EditDescripcionProjectHelper = async (
  projectId: string,
  description: string,
  event: ProjectDescriptionEditedEventPublisher,
  service?: IDefinitionOfTheProjectDomainService,
): Promise<DefinitionOfTheProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.editDescripcionProject(projectId, description);
  event.publish();
  return event.response;
};
