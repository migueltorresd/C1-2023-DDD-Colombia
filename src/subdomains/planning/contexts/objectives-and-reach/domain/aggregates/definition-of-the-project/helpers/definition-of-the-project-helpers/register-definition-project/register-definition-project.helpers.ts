import { DefinitionOfTheProjectDomainEntity } from "../../../../../entities/definition-of-the-project.domain-entity"
import { RegistedDefinitionOfTheProjectEventPublisher } from "../../../../../events/publishers/definition-of-the-project/registed-definition-of-the-project.event-publisher"
import { IDefinitionOfTheProjectDomainService } from "../../../../../services/definition-of-the-project.domain-service";

/**
 * Esta función es un helper que permite registrar una definición del proyecto
 *
 * @param {'string'} definitionId
 * @param {'string'} description
 * @param {true} stateApprove
 * @param {'Date'} dateStart
 * @param {'Date'} dateEnd
 * @param {RegistedDefinitionOfTheProjectEventPublisher} event
 * @param {DefinitionOfTheProjectDomainEntity} service
 * @return {Promise<DefinitionOfTheProjectDomainEntity>}
 */
export const RegisterDefinitionProjectHelpers = async (
   entity: DefinitionOfTheProjectDomainEntity,
   event: RegistedDefinitionOfTheProjectEventPublisher,
   service: IDefinitionOfTheProjectDomainService,
   ): Promise<DefinitionOfTheProjectDomainEntity> => {
   if (!event) throw new Error('El evento no está definido');
   if (!service) throw new Error(' El servicio no está definido');
   event.response = await service.registerDefinitionProject(
       entity,
   );
   event.publish();
   return event.response;
};

