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

@Table({ tableName: 'Benefits', timestamps: false })
export class Benefits extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  override id!: number;

  @ForeignKey(() => TaxReturn)
  @Column(DataType.INTEGER)
  taxreturn_id!: number;

  @Column(DataType.STRING)
  payer_national_id?: string;

  @Column(DataType.STRING)
  payer_name?: string;

  @Column(DataType.INTEGER)
  amount!: number;

  @Column(DataType.STRING)
  type_of_benefit!: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;
}
