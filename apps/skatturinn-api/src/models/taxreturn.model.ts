import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'TaxReturn', timestamps: false })
export class TaxReturn extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  override id!: number;

  @Column(DataType.STRING)
  nationalId!: string;

  @Column(DataType.INTEGER)
  year!: number;
}
