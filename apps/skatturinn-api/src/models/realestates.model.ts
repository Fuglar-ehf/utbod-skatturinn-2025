import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from 'sequelize-typescript';
import { TaxReturn } from './taxreturn.model';

@Table({ tableName: 'Realestates', timestamps: false })
export class Realestates extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  override id!: number;

  @ForeignKey(() => TaxReturn)
  @Column(DataType.INTEGER)
  taxreturn_id!: number;

  @Column(DataType.STRING)
  address!: string;

  @Column(DataType.STRING)
  registration_number!: string;

  @Column(DataType.INTEGER)
  realastate_value!: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;
}
