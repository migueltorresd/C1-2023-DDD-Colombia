/**
 * Esta interfaz define los métodos que deben implementar los repositorios
 *
 * @export
 * @interface IBase // esta interfaz es la que se encarga de definir los métodos que deben implementar los repositorios
 * @template Entity // esta es la entidad que se va a utilizar
 */
export interface IBase<Entity> {
  create(entity: Entity): Promise<Entity>;
  update(id: string, entity: Entity): Promise<Entity>;
  delete(id: string): Promise<boolean>;
  findAll(): Promise<Entity[]>;
  findOneById(id: string): Promise<Entity>;
}
