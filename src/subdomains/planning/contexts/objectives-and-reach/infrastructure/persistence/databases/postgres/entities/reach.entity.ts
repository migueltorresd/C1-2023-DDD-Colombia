import { Column, Entity, Index } from 'typeorm';

@Index('reach_primary_key', ['definitionId'], { unique: true })
@Entity('reach', { schema: 'public' })
export class ReachEntity {
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
}
