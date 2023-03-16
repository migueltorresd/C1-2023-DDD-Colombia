import { IDefinitionOfTheProjectDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/definition-of-the-project.domain-service';
import { DefinitionOfTheProjectPostgresEntity } from '../entities/definition-of-the-project-postgres.entity';
import { DefinitionOfTheProjectRepository } from '../repositories/definition-of-the-project.repository';

export class DefinitionOfTheProjectPostgresService
  implements
    IDefinitionOfTheProjectDomainService<DefinitionOfTheProjectPostgresEntity>
{
  constructor(
    private readonly definitionOfTheProjectRepository: DefinitionOfTheProjectRepository,
  ) {}
  addDateEnd(
    definitionId: string,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.dateEnd = dateEnd;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  editDateEnd(
    definitionId: string,
    dateEnd: Date,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.dateEnd = dateEnd;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  editDescripcionProject(
    definitionId: string,
    description: string,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.description = description;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  editStateApproveProject(
    definitionId: string,
    stateApprove: boolean,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = new DefinitionOfTheProjectPostgresEntity();
    data.stateApprove = stateApprove;
    return this.definitionOfTheProjectRepository.update(definitionId, data);
  }
  registerDefinitionProject(
    entity: DefinitionOfTheProjectPostgresEntity,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    return this.definitionOfTheProjectRepository.create(entity);
  }
  getDefinitionOfTheProjectById(
    definitionId: string,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    return this.definitionOfTheProjectRepository.findOneById(definitionId);
  }
}
