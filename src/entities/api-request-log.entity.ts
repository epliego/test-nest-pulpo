import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tp_api_request_log')
export class ApiRequestLogEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    comment: 'Unique Identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
    width: 255,
    comment: 'Guest User Session',
  })
  user: string;

  @Column({
    type: 'varchar',
    width: 255,
    comment: 'API Name consulted',
  })
  event_name: string;

  @Column({
    type: 'int',
    width: 1,
    comment: 'Active register boolean atribute',
    default: 1,
  })
  active: number;

  @Column({
    type: 'timestamp',
    comment: 'Insert Date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  insert_date: Date;

  @Column({
    type: 'int',
    width: 11,
    comment: 'User that inserted the registry',
    default: 1,
  })
  insert_by: number;

  @Column({
    type: 'timestamp',
    comment: 'Update Date',
    nullable: true,
  })
  update_date: Date;

  @Column({
    type: 'int',
    width: 11,
    comment: 'User that updated the registry',
    nullable: true,
  })
  update_by: number;
}
