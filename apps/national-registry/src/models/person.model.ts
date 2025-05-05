import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'people',
  timestamps: false,
})
export class Person extends Model<Person> {
  @Column({ primaryKey: true, type: DataType.STRING })
  national_id!: string; // Kennitala

  @Column(DataType.STRING)
  name!: string; // Nafn

  @Column(DataType.STRING)
  gender!: string; // Kyn

  @Column(DataType.DATEONLY)
  birth_date!: Date; // Fæðingardagur

  @Column(DataType.STRING)
  address!: string; // Heimilisfang

  @Column(DataType.STRING)
  postal_code!: string; // Postnumer

  @Column(DataType.STRING)
  municipality!: string; // Sveitarfelag

  @Column(DataType.STRING)
  nationality!: string; // Rikisfang

  @Column(DataType.STRING)
  marital_status!: string; // Hjúskaparstaða

  @Column(DataType.STRING)
  spouse_national_id!: string | null; // MakiKennitala

  @Column(DataType.STRING)
  status!: string; // Stada
}
