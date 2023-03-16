import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReachPostgresEntity } from '../entities/reach-postgres.entity';
import { IBase } from './interfaces/base.interface';

export class ReachPostgresRepository implements IBase<ReachPostgresEntity> {
  constructor(
    @InjectRepository(ReachPostgresEntity)
    private reachPostgresRepository: Repository<ReachPostgresEntity>,
  ) {}
  async findOneById(id: string): Promise<ReachPostgresEntity> {
    const data = await this.reachPostgresRepository.findOneBy({
      definitionId: id,
    });
    if (data) return data;
    throw new Error('Alcance no encontrado');
  }

  async create(entity: ReachPostgresEntity): Promise<ReachPostgresEntity> {
    return this.reachPostgresRepository.save(entity);
  }

  async update(
    id: string,
    entity: ReachPostgresEntity,
  ): Promise<ReachPostgresEntity> {
    const data = await this.reachPostgresRepository.findOneBy({
      definitionId: id,
    });
    if (data) {
      const newEntity = {
        ...data,
        ...entity,
        reachId: id,
      };
      return this.reachPostgresRepository.save(newEntity);
    }
    throw new Error('Alcance no encontrado');
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.reachPostgresRepository.findOneBy({
      definitionId: id,
    });
    if (data) {
      await this.reachPostgresRepository.remove(data);
      return true;
    }
    throw new Error('Alcance no encontrado');
  }

  async findAll(): Promise<ReachPostgresEntity[]> {
    return this.reachPostgresRepository.find();
  }
}
