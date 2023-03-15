import { Column, Entity, Index } from 'typeorm';

@Index('reach_primary_key', ['usuarioId'], { unique: true })
@Entity('reach', { schema: 'public' })
export class ReachEntity {
  @Column('uuid', {
    primary: true,
    name: 'reach_id',
    default: () => 'uuid_generate_v4()',
  })
  reachId: string;
  @Column('character varying', { name: 'nombre', length: 50 })
  definition: string;
  @Column('character varying', { name: 'prioritize', length: 10 })
  prioritize: string;
  @Column('character varying', { name: 'stateDefinition' })
  stateDefinition: boolean;
}
