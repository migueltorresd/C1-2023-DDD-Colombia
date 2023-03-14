import { DefinitionOfTheProjectDomainEntity } from "../../../../../entities/definition-of-the-project.domain-entity"
import { RegistedDefinitionOfTheProjectEventPublisher } from "../../../../../events/publishers/definition-of-the-project/registed-definition-of-the-project.event-publisher"
import { IDefinitionOfTheProjectDomainService } from "../../../../../services/definition-of-the-project.domain-service";

/**
 * Esta función es un helper que permite registrar una definición del proyecto
 *
 * @param {'string'} definitionId // id de la definición del proyecto
 * @param {'string'} description // descripción del proyecto
 * @param {true} stateApprove // estado de aprobación
 * @param {'Date'} dateStart    // fecha de inicio del proyecto
 * @param {'Date'} dateEnd // fecha de finalización del proyecto
 * @param {RegistedDefinitionOfTheProjectEventPublisher} event // evento de registro de la definición del proyecto
 * @param {DefinitionOfTheProjectDomainEntity} service // servicio del dominio
 * @return {Promise<DefinitionOfTheProjectDomainEntity>} // retorna la entidad del dominio
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

