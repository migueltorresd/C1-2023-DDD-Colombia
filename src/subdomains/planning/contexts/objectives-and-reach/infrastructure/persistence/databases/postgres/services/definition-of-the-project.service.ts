import { DefinitionOfTheProjectDomainEntity } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/entities/definition-of-the-project.domain-entity';
import { IDefinitionOfTheProjectDomainInterface } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/entities/interfaces/definition-of-the-project.domain-entity.interface';
import { IDefinitionOfTheProjectDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/definition-of-the-project.domain-service';
import { DefinitionOfTheProjectEntity } from '../entities/definition-of-the-project.entity';
import { DefinitionOfTheProjectRepository } from '../repositories/definition-of-the-project.repository';

export class DefinitionOfTheProjectService
  implements IDefinitionOfTheProjectDomainService<DefinitionOfTheProjectEntity>
{
  constructor(
    private readonly definitionOfTheProjectRepository: DefinitionOfTheProjectRepository,
  ) {}
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<DefinitionOfTheProjectEntity> {
    const data = new DefinitionOfTheProjectEntity();
    data.description = description;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  editStateApproveProject(
    definitionId: string,
    stateApprove: boolean,
  ): Promise<DefinitionOfTheProjectEntity> {
    const data = new DefinitionOfTheProjectEntity();
    data.stateApprove = stateApprove;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  addDateEnd(
    definitionId: string,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectEntity> {
    const data = new DefinitionOfTheProjectEntity();
    data.dateEnd = dateEnd;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  registerDefinitionProject(
    entity: DefinitionOfTheProjectDomainEntity,
  ): Promise<DefinitionOfTheProjectEntity> {
    return this.definitionOfTheProjectRepository.create(entity);
  }
  getDefinitionOfTheProjectById(
    definitionId: string,
  ): Promise<DefinitionOfTheProjectEntity> {
    return this.definitionOfTheProjectRepository.findOneByDefinitionId(
      definitionId,
    );
  }
}
