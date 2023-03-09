import { ProjectDomainEntity } from '../../../../../entities/project.domain-entity';
import { BudgetEditedEventPublisher } from '../../../../../events/publishers/project/budget-edited.event-publisher';
import { IProjectDomainService } from '../../../../../services/proyect.domain-service';

/**
 * validar que el evento no sea nulo y que el servicio no sea nulo
 *
 * @param {string} projectId
 * @param {number} budget
 * @param {BudgetEditedEventPublisher} event
 * @param {IProjectDomainService} [service]
 * @return {Promise<ProjectDomainEntity>}
 */
export const EditBudgetHelper = async (
  projectId: string,
  budget: number,
  event: BudgetEditedEventPublisher,
  service?: IProjectDomainService,
): Promise<ProjectDomainEntity> => {
  if (!event) throw new Error('El evento no está definido');
  if (!service) throw new Error(' El servicio no está definido');
  event.response = await service.editBudget(projectId, budget);
  event.publish();
  return event.response;
};
