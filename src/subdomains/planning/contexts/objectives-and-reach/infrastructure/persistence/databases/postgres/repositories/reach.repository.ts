import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReachPostgresEntity } from '../entities/reach-postgres.entity';
import { IBase } from './interfaces/base.interface';

/**
 * esta clase es la que se encarga de definir el repositorio de la base de datos
 *
 * @export
 * @class ReachPostgresRepository
 * @implements {IBase<ReachPostgresEntity>}
 */
export class ReachPostgresRepository implements IBase<ReachPostgresEntity> {
  constructor(
    @InjectRepository(ReachPostgresEntity)
    private reachPostgresRepository: Repository<ReachPostgresEntity>,
  ) {}
  /**
   * este metodo es el encargado de buscar un alcance por su id
   *
   * @param {string} id // este es el id del alcance
   * @return {Promise<ReachPostgresEntity>} // retorna la entidad del alcance
   * @memberof ReachPostgresRepository
   */
  async findOneById(id: string): Promise<ReachPostgresEntity> {
    const data = await this.reachPostgresRepository.findOneBy({
      definitionId: id,
    });
    if (data) return data;
    throw new Error('Alcance no encontrado');
  }

  /**
   * este metodo es el encargado de crear un alcance
   *
   * @param {ReachPostgresEntity} entity // esta es la entidad que se va a crear
   * @return {Promise<ReachPostgresEntity>} // retorna la entidad que se creo 
   * @memberof ReachPostgresRepository 
   */
  async create(entity: ReachPostgresEntity): Promise<ReachPostgresEntity> {
    return this.reachPostgresRepository.save(entity);
  }

  /**
   * este metodo es el encargado de actualizar un alcance
   *
   * @param {string} id // este es el id del alcance
   * @param {ReachPostgresEntity} entity // esta es la entidad que se va a actualizar
   * @return {Promise<ReachPostgresEntity>} // retorna la entidad que se actualizo
   * @memberof ReachPostgresRepository
   */
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

  /**
   * este metodo es el encargado de eliminar un alcance
   *
   * @param {string} id
   * @return {Promise<boolean>} // retorna true si se elimino el alcance
   * @memberof ReachPostgresRepository // retorna un error si no se encontro el alcance
   */
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
