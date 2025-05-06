import { ApiProperty } from '@nestjs/swagger';

export class CreateOtherLoanDto {
  @ApiProperty()
  taxreturn_id!: number;

  @ApiProperty()
  loan_description!: string;

  @ApiProperty()
  loan_provider_national_id!: string;

  @ApiProperty()
  interest!: number;

  @ApiProperty()
  remaining!: number;
}
