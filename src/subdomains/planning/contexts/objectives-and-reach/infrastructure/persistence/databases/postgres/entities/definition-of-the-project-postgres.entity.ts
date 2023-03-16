import { DefinitionOfTheProjectDomainEntity } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/entities/definition-of-the-project.domain-entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ProjectPostgresEntity } from './project-postgres.entity';
import { ReachPostgresEntity } from './reach-postgres.entity';
/**
 *  esta clase es la que se encarga de definir la entidad de la base de datos
 *
 * @export
 * @class DefinitionOfTheProjectPostgresEntity
 * @extends {DefinitionOfTheProjectDomainEntity}
 */
@Entity('definition_of_the_project', { schema: 'public' })
export class DefinitionOfTheProjectPostgresEntity extends DefinitionOfTheProjectDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'definition_id',
    default: () => 'uuid_generate_v4()',
  })
  definitionId?: string;
  @Column('character varying', { name: 'name', length: 256 })
  description?: string;

  @Column('character varying', { name: 'stateApprove' })
  stateApprove?: boolean;

  @Column('date', { name: 'dateStart', nullable: true })
  dateEnd: Date | undefined | number;

  @Column('date', { name: 'dateEnd', nullable: true })
  dateStart: Date | undefined | number;

  @OneToMany(
    () => ReachPostgresEntity,
    (reach) => reach.definitionOfTheProject,
    {
      cascade: ['insert'],
    },
  )
  reachs?: ReachPostgresEntity[];

  @OneToMany(
    () => ProjectPostgresEntity,
    (project) => project.definitionOfTheProject,
    {
      cascade: ['insert'],
    },
  )
  projects?: ProjectPostgresEntity[];
}
