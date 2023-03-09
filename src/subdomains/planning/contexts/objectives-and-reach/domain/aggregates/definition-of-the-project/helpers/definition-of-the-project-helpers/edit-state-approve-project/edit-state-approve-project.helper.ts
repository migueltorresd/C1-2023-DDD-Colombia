import { DefinitionOfTheProjectDomainEntity } from '../../../../../entities/definition-of-the-project.domain-entity';
import { ProjectDescriptionEditedEventPublisher } from '../../../../../events/publishers/definition-of-the-project/project-description-edited.event-publisher';
import { IDefinitionOfTheProjectDomainService } from '../../../../../services/definition-of-the-project.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId
 * @param {boolean} stateApprove
 * @param {ProjectDescriptionEditedEventPublisher} event
 * @param {IDefinitionOfTheProjectDomainService} [service]
 * @return {*}  {Promise<DefinitionOfTheProjectDomainEntity>}
 */
export const EditStateApproveProjectHelper = async (
  definitionId: string,
  stateApprove: boolean,
  event: ProjectDescriptionEditedEventPublisher,
  service?: IDefinitionOfTheProjectDomainService,
): Promise<DefinitionOfTheProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.editStateApproveProject(
    definitionId,
    stateApprove,
  );
  event.publish();
  return event.response;
};
