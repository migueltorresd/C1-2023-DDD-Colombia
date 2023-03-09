import { DefinitionOfTheProjectDomainEntity } from "../../../../../entities/definition-of-the-project.domain-entity"
import { RegistedDefinitionOfTheProjectEventPublisher } from "../../../../../events/publishers/definition-of-the-project/registed-definition-of-the-project.event-publisher"
import { IDefinitionOfTheProjectDomainService } from "../../../../../services/definition-of-the-project.domain-service";

/**
 *
 *
 * @param {'string'} definitionId
 * @param {'string'} description
 * @param {true} stateApprove
 * @param {'string'} dateStart
 * @param {'string'} dateEnd
 * @param {RegistedDefinitionOfTheProjectEventPublisher} event
 * @param {DefinitionOfTheProjectDomainEntity} service
 * @return {Promise<DefinitionOfTheProjectDomainEntity>}
 */
export const RegisterDefinitionProjectHelpers = async (
   definitionId: 'string',
   description: 'string',
   stateApprove: true,
   dateStart: 'string',
   dateEnd: 'string',
   event: RegistedDefinitionOfTheProjectEventPublisher,
   service: IDefinitionOfTheProjectDomainService,
   ): Promise<DefinitionOfTheProjectDomainEntity> => {
   if (!event) throw new Error('El evento no está definido');
   if (!service) throw new Error(' El servicio no está definido');
   event.response = await service.registerDefinitionProject(
       definitionId,
       description,
       stateApprove,
       dateStart,
       dateEnd,
   );
   event.publish();
   return event.response;
};

