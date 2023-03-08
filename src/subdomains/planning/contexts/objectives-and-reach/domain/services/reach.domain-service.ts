import { ReachDomainEntity } from '../entities/reach.domain-entity';

export interface IReachDomainService<
  Entity extends ReachDomainEntity = ReachDomainEntity,
> {
  createReach(
    definitionId: string,
    definition: string,
    prioritize: string,
    stateDefinition: string,
  ): Promise<Entity>;
  editDefinition(definitionId: string, definition: string): Promise<Entity>;
  editPrioritize(definitionId: string, prioritize: string): Promise<Entity>;
  editStateDefinition(
    definitionId: string,
    stateDefinition: string,
  ): Promise<Entity>;
}
