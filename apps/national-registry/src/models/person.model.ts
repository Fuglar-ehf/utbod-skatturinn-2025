import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'people',
  timestamps: false,
})
export class Person extends Model<Person> {
  @ApiProperty()
  @PrimaryKey
  @Column({ primaryKey: true, type: DataType.STRING })
  national_id!: string; // Kennitala

  @ApiProperty()
  @Column(DataType.STRING)
  name!: string; // Nafn

  @ApiProperty()
  @Column(DataType.STRING)
  nominative_case_address!: string; // HeimiliNefnifall

  @ApiProperty()
  @Column(DataType.STRING)
  dative_case_address!: string; // HeimiliThagufall

  @ApiProperty()
  @Column(DataType.STRING)
  postal_code!: string; // Postnumer

  @ApiProperty()
  @Column(DataType.STRING)
  gender!: string; // Kyn

  @ApiProperty()
  @Column(DataType.DATEONLY)
  birth_date!: Date; // FaedD

  @ApiProperty()
  @Column(DataType.STRING)
  family_id!: string; // Fjölskyldunúmer

  @ApiProperty()
  @Column(DataType.STRING)
  marital_status!: string; // Hjúskaparstaða

  @ApiProperty()
  @Column(DataType.STRING)
  nationality!: string; // Rikisfang
}
