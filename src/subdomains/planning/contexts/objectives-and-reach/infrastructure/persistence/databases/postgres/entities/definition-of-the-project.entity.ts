import { Column } from 'typeorm';

export class DefinitionOfTheProjectEntity {
  @Column('uuid', {
    primary: true,
    name: 'definition_id',
    default: () => 'uuid_generate_v4()',
  })
  definitionId: string;
  @Column('character varying', { name: 'name', length: 256 })
  description?: string;

  @Column('character varying', { name: 'stateApprove' })
  stateApprove: boolean;

  @Column('date', { name: 'dateStart' })
  dateEnd: Date;

  @Column('date', { name: 'dateEnd' })
  dateStart: Date;
}
