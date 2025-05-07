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

@Table({ tableName: 'Mortgages', timestamps: false })
export class Mortgages extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  override id!: number;

  @ForeignKey(() => TaxReturn)
  @Column(DataType.INTEGER)
  taxreturn_id!: number;

  @Column(DataType.INTEGER)
  year_bought!: number;

  @Column(DataType.DATEONLY)
  date!: Date;

  @Column(DataType.INTEGER)
  amount!: number;

  @Column(DataType.STRING)
  address!: string;

  @Column(DataType.STRING)
  loan_id!: string;

  @Column(DataType.INTEGER)
  period_of_loan!: number;

  @Column(DataType.STRING)
  loan_provider!: string;

  @Column(DataType.STRING)
  loan_provider_national_id!: string;

  @Column(DataType.INTEGER)
  principal!: number;

  @Column(DataType.INTEGER)
  interest!: number;

  @Column(DataType.INTEGER)
  remaining!: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;
}
