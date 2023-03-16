import { ProjectDomainEntity } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/entities/project.domain-entity';
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { DefinitionOfTheProjectPostgresEntity } from './definition-of-the-project-postgres.entity';

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

  @ManyToOne(
    () => DefinitionOfTheProjectPostgresEntity,
    (definitionOfTheProject) => definitionOfTheProject.projects,
  )
  definitionOfTheProject?: DefinitionOfTheProjectPostgresEntity[];
}
