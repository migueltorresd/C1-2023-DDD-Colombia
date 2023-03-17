import { DefinitionOfTheProjectDomainEntity } from "../../../../../entities/definition-of-the-project.domain-entity";
import { DefinitionOfTheProjectObtainedEventPublisher } from "../../../../../events/publishers/definition-of-the-project/definition-of-the-project-obtained.event-publisher";
import { IDefinitionOfTheProjectDomainService } from "../../../../../services/definition-of-the-project.domain-service";

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} definitionId // id de la definición del proyecto
 * @param {DefinitionOfTheProjectObtainedEventPublisher} event // evento de obtención de la definición del proyecto
 * @param {IDefinitionOfTheProjectDomainService} service // servicio del dominio
 * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad del dominio
 */
export const GetDefinitionOfTheProjectHelper = async (
  definitionId: string,
  event: DefinitionOfTheProjectObtainedEventPublisher,
  service: IDefinitionOfTheProjectDomainService,
): Promise<DefinitionOfTheProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error('El servicio no está definido');
  event.response = await service.getDefinitionOfTheProject(definitionId);
  event.publish();
  return event.response;
};
