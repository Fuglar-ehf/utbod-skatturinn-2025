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
  gender!: string; // Kyn

  @ApiProperty()
  @Column(DataType.DATEONLY)
  birth_date!: Date; // Fæðingardagur

  @ApiProperty()
  @Column(DataType.STRING)
  address!: string; // Heimilisfang

  @ApiProperty()
  @Column(DataType.STRING)
  postal_code!: string; // Postnumer

  @ApiProperty()
  @Column(DataType.STRING)
  municipality!: string; // Sveitarfelag

  @ApiProperty()
  @Column(DataType.STRING)
  nationality!: string; // Rikisfang

  @ApiProperty()
  @Column(DataType.STRING)
  marital_status!: string; // Hjúskaparstaða

  @ApiProperty()
  @Column(DataType.STRING)
  spouse_national_id!: string | null; // MakiKennitala

  @ApiProperty()
  @Column(DataType.STRING)
  status!: string; // Stada
}
