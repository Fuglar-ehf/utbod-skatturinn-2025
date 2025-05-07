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

@Table({ tableName: 'OtherLoans', timestamps: false })
export class OtherLoans extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  override id!: number;

  @ForeignKey(() => TaxReturn)
  @Column(DataType.INTEGER)
  taxreturn_id!: number;

  @Column(DataType.STRING)
  loan_description!: string;

  @Column(DataType.STRING)
  loan_provider_national_id!: string;

  @Column(DataType.INTEGER)
  interest!: number;

  @Column(DataType.INTEGER)
  remaining!: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;
}
