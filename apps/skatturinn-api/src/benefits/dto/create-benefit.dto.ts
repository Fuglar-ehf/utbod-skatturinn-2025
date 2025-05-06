import { ApiProperty } from '@nestjs/swagger';

export class CreateBenefitDto {
  @ApiProperty()
  taxreturn_id!: number;

  @ApiProperty()
  from!: string;

  @ApiProperty()
  amount!: number;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  type_of_benefit!: string;
}
