import { DefinitionOfTheProjectDomainEntity } from '../../../../../entities/definition-of-the-project.domain-entity';
import { ProjectDescriptionCreatedEventPublisher } from '../../../../../events/publishers/definition-of-the-project/project-description-created.event-publisher';
import { IDefinitionOfTheProjectDomainService } from '../../../../../services/definition-of-the-project.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId
 * @param {string} description
 * @param {ProjectDescriptionCreatedEventPublisher} event
 * @param {IDefinitionOfTheProjectDomainService} [service]
 * @return {Promise<DefinitionOfTheProjectDomainEntity>}
 */
export const createDescripcionProjectHelper = async (
  projectId: string,
  description: string,
  event: ProjectDescriptionCreatedEventPublisher,
  service?: IDefinitionOfTheProjectDomainService,
): Promise<DefinitionOfTheProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.createDescripcionProject(
    projectId,
    description,
  );
  event.publish();
  return event.response;
};
