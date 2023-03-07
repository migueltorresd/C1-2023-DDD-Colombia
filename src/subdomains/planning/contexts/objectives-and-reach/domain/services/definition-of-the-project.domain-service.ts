import { DefinitionOfTheProjectDomainEntity } from '../entities/definition-of-the-project.domain-entity';

export interface IDefinitionOfTheProjectDomainService<
  Entity extends DefinitionOfTheProjectDomainEntity,
> {
  createDescripcionProject(definitionId: string): Promise<Entity>;
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<Entity>;
  editStateApproveProject(
    definitionId: string,
    stateApprove: string,
  ): Promise<Entity>;
  addDateEnd(dateEnd: string): Promise<Entity>;
  editDateEnd(dateEnd: string): Promise<Entity>;
  registerDefinitionProject(
    definitionId: string,
    description: string,
    stateApprove: string,
    dateStart: Date,
    dateEnd: Date,
  ): Promise<Entity>;
}
