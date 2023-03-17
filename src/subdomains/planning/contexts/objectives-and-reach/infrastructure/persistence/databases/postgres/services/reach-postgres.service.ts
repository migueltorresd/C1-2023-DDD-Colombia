import { Injectable } from '@nestjs/common';
import { IReachDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/reach.domain-service';
import { ReachPostgresEntity } from '../entities/reach-postgres.entity';
import { ReachPostgresRepository } from '../repositories/reach.repository';

/**
 *  este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class ReachPostgresService
 * @implements {IReachDomainService<ReachPostgresEntity>}
 */
@Injectable()
export class ReachPostgresService
  implements IReachDomainService<ReachPostgresEntity>
{
  constructor(private readonly reachRepository: ReachPostgresRepository) {}
  /**
   * obtiene el alcance
   *
   * @param {string} definitionId // id de la definicion del alcance
   * @param {string} definition // definicion del alcance
   * @param {string} prioritize // prioridad del alcance
   * @param {boolean} stateDefinition // estado de la definicion del alcance
   * @return {Promise<ReachPostgresEntity>} // alcance
   * @memberof ReachPostgresService
   */
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
  /**
   * obtiene la definicion
   *
   * @param {string} definitionId // id de la definicion del alcance
   * @param {string} definition // definicion del alcance
   * @return {Promise<ReachPostgresEntity>} // alcance
   * @memberof ReachPostgresService
   */
  editDefinition(
    definitionId: string,
    definition: string,
  ): Promise<ReachPostgresEntity> {
    const data = new ReachPostgresEntity();
    data.definition = definition;
    return this.reachRepository.update(definitionId, data);
  }
  /**
   * obtiene el priorizacion
   *
   * @param {string} definitionId
   * @param {string} prioritize
   * @return {Promise<ReachPostgresEntity>}
   * @memberof ReachPostgresService
   */
  editPrioritize(
    definitionId: string,
    prioritize: string,
  ): Promise<ReachPostgresEntity> {
    const data = new ReachPostgresEntity();
    data.prioritize = prioritize;
    return this.reachRepository.update(definitionId, data);
  }
  /**
   * obtiene el estado de la definicion
   *
   * @param {string} definitionId // id de la definicion del alcance
   * @param {boolean} stateDefinition // estado de la definicion del alcance
   * @return {{Promise<ReachPostgresEntity>} 
   * @memberof ReachPostgresService
   */
  editStateDefinition(
    definitionId: string,
    stateDefinition: boolean,
  ): Promise<ReachPostgresEntity> {
    const data = new ReachPostgresEntity();
    data.stateDefinition = stateDefinition;
    return this.reachRepository.update(definitionId, data);
  }
}
