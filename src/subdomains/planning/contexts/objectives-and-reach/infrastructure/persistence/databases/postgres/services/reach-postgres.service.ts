import { Injectable } from '@nestjs/common';
import { IReachDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/reach.domain-service';
import { ReachPostgresEntity } from '../entities/reach-postgres.entity';
import { ReachPostgresRepository } from '../repositories/reach.repository';

@Injectable()
export class ReachPostgresService
  implements IReachDomainService<ReachPostgresEntity>
{
  constructor(private readonly reachRepository: ReachPostgresRepository) {}
  createReach(
    definitionId: string,
    definition: string,
    prioritize: string,
    stateDefinition: boolean,
  ): Promise<ReachPostgresEntity> {
    const data = new ReachPostgresEntity();
    data.definitionId = definitionId;
    data.definition = definition;
    data.prioritize = prioritize;
    data.stateDefinition = stateDefinition;
    return this.reachRepository.create(data);
  }
  editDefinition(
    definitionId: string,
    definition: string,
  ): Promise<ReachPostgresEntity> {
    const data = new ReachPostgresEntity();
    data.definition = definition;
    return this.reachRepository.update(definitionId, data);
  }
  editPrioritize(
    definitionId: string,
    prioritize: string,
  ): Promise<ReachPostgresEntity> {
    const data = new ReachPostgresEntity();
    data.prioritize = prioritize;
    return this.reachRepository.update(definitionId, data);
  }
  editStateDefinition(
    definitionId: string,
    stateDefinition: boolean,
  ): Promise<ReachPostgresEntity> {
    const data = new ReachPostgresEntity();
    data.stateDefinition = stateDefinition;
    return this.reachRepository.update(definitionId, data);
  }
}
