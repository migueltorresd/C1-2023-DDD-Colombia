import { Injectable } from '@nestjs/common';
import { IReachDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/reach.domain-service';
import { ReachEntity } from '../entities/reach.entity';
import { ReachRepository } from '../repositories/reach.repository';
@Injectable()
export class ReachService implements IReachDomainService<ReachEntity> {
  constructor(private readonly reachRepository: ReachRepository) {}
  createReach(
    definitionId: string,
    definition: string,
    prioritize: string,
    stateDefinition: boolean,
  ): Promise<ReachEntity> {
    return this.reachRepository.create({
      definitionId,
      definition,
      prioritize,
      stateDefinition,
    });
  }
  editDefinition(
    definitionId: string,
    definition: string,
  ): Promise<ReachEntity> {
    const data = new ReachEntity();
    data.definition = definition;
    return this.reachRepository.update(definitionId, data);
  }
  editPrioritize(
    definitionId: string,
    prioritize: string,
  ): Promise<ReachEntity> {
    const data = new ReachEntity();
    data.prioritize = prioritize;
    return this.reachRepository.update(definitionId, data);
  }
  editStateDefinition(
    definitionId: string,
    stateDefinition: boolean,
  ): Promise<ReachEntity> {
    const data = new ReachEntity();
    data.stateDefinition = stateDefinition;
    return this.reachRepository.update(definitionId, data);
  }
}
