import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DefinitionOfTheProjectPostgresEntity } from '../entities/definition-of-the-project-postgres.entity';
import { IBase } from './interfaces/base.interface';

export class DefinitionOfTheProjectRepository
  implements IBase<DefinitionOfTheProjectPostgresEntity>
{
  constructor(
    @InjectRepository(DefinitionOfTheProjectPostgresEntity)
    private definitionOfTheProjectRepository: Repository<DefinitionOfTheProjectPostgresEntity>,
  ) {}

  async create(
    entity: DefinitionOfTheProjectPostgresEntity,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    return this.definitionOfTheProjectRepository.save(entity);
  }

  async update(
    id: string,
    entity: DefinitionOfTheProjectPostgresEntity,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
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

  async findAll(): Promise<DefinitionOfTheProjectPostgresEntity[]> {
    return this.definitionOfTheProjectRepository.find();
  }

  async findOneById(id: string): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = await this.definitionOfTheProjectRepository.findOneBy({
      definitionId: id,
    });
    if (data) return data;
    throw new Error('Definición del proyecto no encontrado');
  }
}
