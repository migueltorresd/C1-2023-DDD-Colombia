import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DefinitionOfTheProjectEntity } from '../entities/definition-of-the-project.entity';
import { IBase } from './interfaces/base.interface';

export class DefinitionOfTheProjectRepository
  implements IBase<DefinitionOfTheProjectEntity>
{
  constructor(
    @InjectRepository(DefinitionOfTheProjectEntity)
    private definitionOfTheProjectRepository: Repository<DefinitionOfTheProjectEntity>,
  ) {}

  async create(
    entity: DefinitionOfTheProjectEntity,
  ): Promise<DefinitionOfTheProjectEntity> {
    return this.definitionOfTheProjectRepository.save(entity);
  }

  async update(
    id: string,
    entity: DefinitionOfTheProjectEntity,
  ): Promise<DefinitionOfTheProjectEntity> {
    const data = await this.definitionOfTheProjectRepository.findOneBy({
      definitionId: id,
    });
    if (data) {
      const newEntity = {
        ...data,
        ...entity,
        definitionId: id,
      };
      return this.definitionOfTheProjectRepository.save(newEntity);
    }
    throw new Error('Definición del proyecto no encontrado');
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.definitionOfTheProjectRepository.findOneBy({
      definitionId: id,
    });
    if (data) {
      await this.definitionOfTheProjectRepository.remove(data);
      return true;
    }
    throw new Error('Definición del proyecto no encontrado');
  }

  async findAll(): Promise<DefinitionOfTheProjectEntity[]> {
    return this.definitionOfTheProjectRepository.find();
  }

  async findOneByDefinitionId(
    id: string,
  ): Promise<DefinitionOfTheProjectEntity> {
    const data = await this.definitionOfTheProjectRepository.findOneBy({
      definitionId: id,
    });
    if (data) return data;
    throw new Error('Definición del proyecto no encontrado');
  }
}
