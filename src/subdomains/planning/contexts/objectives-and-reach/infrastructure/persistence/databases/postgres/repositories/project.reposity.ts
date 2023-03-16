import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectPostgresEntity } from '../entities/project-postgres.entity';
import { IBase } from './interfaces/base.interface';

/**
 * esta clase es la que se encarga de definir el repositorio de la base de datos
 *
 * @export
 * @class ProjectRepository
 * @implements {IBase<ProjectPostgresEntity>}
 */
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

  /**
   * este metodo es el encargado de crear un proyecto
   *
   * @param {ProjectPostgresEntity} entity // esta es la entidad que se va a crear
   * @return {Promise<ProjectPostgresEntity>} // retorna la entidad que se creo
   * @memberof ProjectRepository
   */
  async create(entity: ProjectPostgresEntity): Promise<ProjectPostgresEntity> {
    return this.projectRepository.save(entity);
  }

  /**
   * este metodo es el encargado de actualizar un proyecto
   *
   * @param {string} id // este es el id del proyecto
   * @param {ProjectPostgresEntity} entity // esta es la entidad que se va a actualizar
   * @return {Promise<ProjectPostgresEntity>} // retorna la entidad que se actualizo
   * @memberof ProjectRepository
   */
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

  /**
   * este metodo es el encargado de eliminar un proyecto
   *
   * @param {string} id // este es el id del proyecto
   * @return {Promise<boolean>} // retorna un booleano
   * @memberof ProjectRepository // este metodo es el encargado de eliminar un proyecto 
   */
  async delete(id: string): Promise<boolean> {
    const data = await this.projectRepository.findOneBy({ projectId: id });
    if (data) {
      await this.projectRepository.remove(data);
      return true;
    }
    throw new Error('Proyecto no encontrado');
  }

  /**
   * este metodo es el encargado de buscar todos los proyectos
   *
   * @return {Promise<ProjectPostgresEntity[]>} // retorna un arreglo de proyectos
   * @memberof ProjectRepository // este metodo es el encargado de buscar todos los proyectos
   */
  async findAll(): Promise<ProjectPostgresEntity[]> {
    return this.projectRepository.find();
  }
}
