import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../entities/project.entity';
import { IBase } from './interfaces/base.interface';

export class ProjectRepository implements IBase<ProjectEntity> {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}

  async create(entity: ProjectEntity): Promise<ProjectEntity> {
    return this.projectRepository.save(entity);
  }

  async update(id: string, entity: ProjectEntity): Promise<ProjectEntity> {
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

  async findAll(): Promise<ProjectEntity[]> {
    return this.projectRepository.find();
  }

  async findOneByUsuarioId(id: string): Promise<ProjectEntity> {
    const data = await this.projectRepository.findOneBy({ projectId: id });
    if (data) return data;
    throw new Error('Proyecto no encontrado');
  }
}
