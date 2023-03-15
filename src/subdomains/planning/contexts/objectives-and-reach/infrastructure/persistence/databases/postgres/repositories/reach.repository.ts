import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReachEntity } from '../entities/reach.entity';
import { IBase } from './interfaces/base.interface';

export class ReachRepository implements IBase<ReachEntity> {
  constructor(
    @InjectRepository(ReachEntity)
    private reachRepository: Repository<ReachEntity>,
  ) {}

  async create(entity: ReachEntity): Promise<ReachEntity> {
    return this.reachRepository.save(entity);
  }

  async update(id: string, entity: ReachEntity): Promise<ReachEntity> {
    const data = await this.reachRepository.findOneBy({ definitionId: id });
    if (data) {
      const newEntity = {
        ...data,
        ...entity,
        reachId: id,
      };
      return this.reachRepository.save(newEntity);
    }
    throw new Error('Alcance no encontrado');
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.reachRepository.findOneBy({ definitionId: id });
    if (data) {
      await this.reachRepository.remove(data);
      return true;
    }
    throw new Error('Alcance no encontrado');
  }

  async findAll(): Promise<ReachEntity[]> {
    return this.reachRepository.find();
  }

  async findOneByUsuarioId(id: string): Promise<ReachEntity> {
    const data = await this.reachRepository.findOneBy({ definitionId: id });
    if (data) return data;
    throw new Error('Alcance no encontrado');
  }
}
