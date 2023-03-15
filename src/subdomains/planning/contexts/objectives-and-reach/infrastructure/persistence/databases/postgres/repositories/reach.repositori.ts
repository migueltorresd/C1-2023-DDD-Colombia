import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReachEntity } from '../entities/reach.entity';

import { IBase } from './interfaces/base.interface';

export class reachRepository implements IBase<ReachEntity> {
  constructor(
    @InjectRepository(ReachEntity)
    private reachRepository: Repository<ReachEntity>,
  ) {}

  async create(entity: ReachEntity): Promise<ReachEntity> {
    return this.reachRepository.save(entity);
  }

  async update(id: string, entity: ReachEntity): Promise<ReachEntity> {
    const data = await this.reachRepository.findOneBy({ reachId: id });
    if (data) {
      const newEntity = {
        ...data,
        ...entity,
        reachId: id,
      };
      return this.reachRepository.save(newEntity);
    }
    throw new Error('No se encontró el registro');
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.reachRepository.destroy({ where: { id } });
    return deleted ? true : false;
  }

  async findAll(): Promise<ReachEntity[]> {
    return await this.reachRepository.findAll();
  }

  async findOneByUsuarioId(id: string): Promise<ReachEntity> {
    return await this.reachRepository.findOne({ where: { id } });
  }
}
