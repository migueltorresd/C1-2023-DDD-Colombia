import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectPostgresEntity } from '../entities/project-postgres.entity';
import { IBase } from './interfaces/base.interface';

export class ProjectRepository implements IBase<ProjectPostgresEntity> {
  constructor(
    @InjectRepository(ProjectPostgresEntity)
    private projectRepository: Repository<ProjectPostgresEntity>,
  ) {}
  async findOneById(id: string): Promise<ProjectPostgresEntity> {
    const data = await this.projectRepository.findOneBy({ projectId: id });
    if (data) return data;
    throw new Error('Proyecto no encontrado');
  }

  async create(entity: ProjectPostgresEntity): Promise<ProjectPostgresEntity> {
    return this.projectRepository.save(entity);
  }

  async update(
    id: string,
    entity: ProjectPostgresEntity,
  ): Promise<ProjectPostgresEntity> {
    const data = await this.projectRepository.findOneBy({ projectId: id });
    if (data) {
      const newEntity = {
        ...data,
        ...entity,
        projectId: id,
      };
      return this.projectRepository.save(newEntity);
    }
    throw new Error('Proyecto no encontrado');
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.projectRepository.findOneBy({ projectId: id });
    if (data) {
      await this.projectRepository.remove(data);
      return true;
    }
    throw new Error('Proyecto no encontrado');
  }

  async findAll(): Promise<ProjectPostgresEntity[]> {
    return this.projectRepository.find();
  }
}
