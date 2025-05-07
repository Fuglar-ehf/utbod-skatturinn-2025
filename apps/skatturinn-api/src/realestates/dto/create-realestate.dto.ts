import { ApiProperty } from '@nestjs/swagger';

export class CreateRealestateDto {
  @ApiProperty()
  taxreturn_id!: number;

  @ApiProperty()
  address!: string;

  @ApiProperty()
  registration_number!: string;

  @ApiProperty()
  realastate_value!: number;
}
