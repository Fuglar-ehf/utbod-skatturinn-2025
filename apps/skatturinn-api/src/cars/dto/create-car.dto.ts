import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  taxreturn_id!: number;

  @ApiProperty()
  year_bought!: number;

  @ApiProperty()
  registration_number!: string;

  @ApiProperty()
  amount!: number;
}
