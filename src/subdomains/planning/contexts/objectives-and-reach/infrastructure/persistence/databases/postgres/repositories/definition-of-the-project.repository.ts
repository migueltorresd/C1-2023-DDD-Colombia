import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DefinitionOfTheProjectPostgresEntity } from '../entities/definition-of-the-project-postgres.entity';
import { IBase } from './interfaces/base.interface';

/**
 * esta clase es la que se encarga de definir el repositorio de la base de datos
 *
 * @export
 * @class DefinitionOfTheProjectRepository
 * @implements {IBase<DefinitionOfTheProjectPostgresEntity>} // esta interfaz es la que se encarga de definir los metodos que se van a utilizar en el repositorio
 */
export class DefinitionOfTheProjectRepository
  implements IBase<DefinitionOfTheProjectPostgresEntity>
{
  constructor(
    @InjectRepository(DefinitionOfTheProjectPostgresEntity)
    private definitionOfTheProjectRepository: Repository<DefinitionOfTheProjectPostgresEntity>,
  ) {}

  /**
   * este metodo es el encargado de crear una definición del proyecto
   *
   * @param {DefinitionOfTheProjectPostgresEntity} entity // esta es la entidad que se va a crear
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // retorna la entidad que se creo
   * @memberof DefinitionOfTheProjectRepository // este metodo es el encargado de crear una definición del proyecto
   */
  async create(
    entity: DefinitionOfTheProjectPostgresEntity,
  ): Promise<DefinitionOfTheProjectPostgresEntity> {
    return this.definitionOfTheProjectRepository.save(entity);
  }

  /**
   * este metodo es el encargado de actualizar una definición del proyecto
   *
   * @param {string} id // este es el id de la definición del proyecto
   * @param {DefinitionOfTheProjectPostgresEntity} entity // esta es la entidad que se va a actualizar
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // retorna la entidad que se actualizo
   * @memberof DefinitionOfTheProjectRepository // este metodo es el encargado de actualizar una definición del proyecto
   */
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

  /**
   * este metodo es el encargado de eliminar una definición del proyecto
   *
   * @param {string} id // este es el id de la definición del proyecto
   * @return {Promise<boolean>} // retorna un booleano
   * @memberof DefinitionOfTheProjectRepository
   */
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

  /**
   * este metodo es el encargado de buscar todas las definiciones del proyecto
   *
   * @return {Promise<DefinitionOfTheProjectPostgresEntity[]>} // retorna un arreglo de definiciones del proyecto
   * @memberof DefinitionOfTheProjectRepository
   */
  async findAll(): Promise<DefinitionOfTheProjectPostgresEntity[]> {
    return this.definitionOfTheProjectRepository.find();
  }

  /**
   * este metodo es el encargado de buscar una definición del proyecto por su id
   *
   * @param {string} id // este es el id de la definición del proyecto
   * @return {Promise<DefinitionOfTheProjectPostgresEntity>} // retorna una definición del proyecto
   * @memberof DefinitionOfTheProjectRepository
   */
  async findOneById(id: string): Promise<DefinitionOfTheProjectPostgresEntity> {
    const data = await this.definitionOfTheProjectRepository.findOneBy({
      definitionId: id,
    });
    if (data) return data;
    throw new Error('Definición del proyecto no encontrado');
  }
}
