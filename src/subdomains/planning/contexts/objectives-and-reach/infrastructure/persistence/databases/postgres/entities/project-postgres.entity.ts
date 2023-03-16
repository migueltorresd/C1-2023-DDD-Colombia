import { ProjectDomainEntity } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/entities/project.domain-entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { DefinitionOfTheProjectPostgresEntity } from './definition-of-the-project-postgres.entity';

/**
 * esta clase es la que se encarga de definir la entidad de la base de datos
 *
 * @export
 * @class ProjectPostgresEntity
 * @extends {ProjectDomainEntity}
 */
@Index('project_primary_key', ['projectId'], { unique: true })
@Entity('project', { schema: 'public' })
export class ProjectPostgresEntity extends ProjectDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'project_id',
    default: () => 'uuid_generate_v4()',
  })
  projectId: string;

  @Column('character varying', { name: 'name', length: 256 })
  name: string;

  @Column('integer', { name: 'budget' })
  budget: number;

  @Column('character varying', { name: 'stateApprove' })
  stateApprove: boolean;

  @ManyToOne(() => DefinitionOfTheProjectPostgresEntity)
  @JoinColumn()
  definitionOfTheProject: DefinitionOfTheProjectPostgresEntity;
}
