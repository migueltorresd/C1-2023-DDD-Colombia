import { ReachDomainEntity } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/entities/reach.domain-entity';
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { DefinitionOfTheProjectPostgresEntity } from './definition-of-the-project-postgres.entity';

/**
 * esta clase es la que se encarga de definir la entidad de la base de datos
 *
 * @export
 * @class ReachPostgresEntity
 * @extends {ReachDomainEntity}
 */
@Index('reach_primary_key', ['definitionId'], { unique: true })
@Entity('reach', { schema: 'public' })
export class ReachPostgresEntity extends ReachDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'reach_id',
    default: () => 'uuid_generate_v4()',
  })
  definitionId: string;
  @Column('character varying', { name: 'nombre', length: 256 })
  definition: string;
  @Column('character varying', { name: 'prioritize', length: 100 })
  prioritize: string;
  @Column('character varying', { name: 'stateDefinition' })
  stateDefinition: boolean;

  @ManyToOne(
    () => DefinitionOfTheProjectPostgresEntity,
    (definitionOfTheProject) => definitionOfTheProject.reachs,
  )
  definitionOfTheProject?: DefinitionOfTheProjectPostgresEntity;
}
