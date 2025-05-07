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

@Table({ tableName: 'Income', timestamps: false })
export class Income extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  override id!: number;

  @ForeignKey(() => TaxReturn)
  @Column(DataType.INTEGER)
  taxreturn_id!: number;

  @Column(DataType.STRING)
  employer_national_id!: string;

  @Column(DataType.STRING)
  employer!: string;

  @Column(DataType.INTEGER)
  income!: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;
}
