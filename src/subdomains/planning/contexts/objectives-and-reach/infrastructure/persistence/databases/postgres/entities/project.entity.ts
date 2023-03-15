import { Column, Entity, Index } from 'typeorm';

@Index('project_primary_key', ['projectId'], { unique: true })
@Entity('project', { schema: 'public' })
export class ProjectEntity {
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
}
