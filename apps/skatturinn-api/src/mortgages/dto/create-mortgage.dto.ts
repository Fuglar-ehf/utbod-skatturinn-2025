import { ApiProperty } from '@nestjs/swagger';

export class CreateMortgageDto {
  @ApiProperty()
  taxreturn_id!: number;

  @ApiProperty()
  year_bought!: number;

  @ApiProperty()
  date!: Date;

  @ApiProperty()
  amount!: number;

  @ApiProperty()
  address!: string;

  @ApiProperty()
  loan_id!: string;

  @ApiProperty()
  period_of_loan!: number;

  @ApiProperty()
  loan_provider!: string;

  @ApiProperty()
  loan_provider_national_id!: string;

  @ApiProperty()
  principal!: number;

  @ApiProperty()
  interest!: number;

  @ApiProperty()
  remaining!: number;
}
