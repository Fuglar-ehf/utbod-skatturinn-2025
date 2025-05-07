import { ApiProperty } from '@nestjs/swagger';

export class CreateIncomeDto {
  @ApiProperty()
  employer_national_id!: string;

  @ApiProperty()
  employer!: string;

  @ApiProperty()
  income!: number;
}

export class CreateCarDto {
  @ApiProperty()
  year_bought!: number;

  @ApiProperty()
  registration_number!: string;

  @ApiProperty()
  amount!: number;
}

export class CreateRealestateDto {
  @ApiProperty()
  address!: string;

  @ApiProperty()
  registration_number!: string;

  @ApiProperty()
  realastate_value!: number;
}

export class CreateMortgageDto {
  @ApiProperty()
  year_bought!: number;

  @ApiProperty()
  date!: string;

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

export class CreateOtherLoanDto {
  @ApiProperty()
  loan_description!: string;

  @ApiProperty()
  loan_provider_national_id!: string;

  @ApiProperty()
  interest!: number;

  @ApiProperty()
  remaining!: number;
}

export class CreateAllowanceDto {
  @ApiProperty()
  amount!: number;

  @ApiProperty()
  type_of_allowance!: string;
}

export class CreateBenefitDto {
  @ApiProperty()
  payer_national_id?: string;

  @ApiProperty()
  payer_name?: string;

  @ApiProperty()
  amount!: number;

  @ApiProperty()
  type_of_benefit!: string;
}

export class CreateTaxReturnDataDto {
  @ApiProperty()
  nationalid!: string;

  @ApiProperty()
  year!: string;

  @ApiProperty({ type: [CreateIncomeDto] })
  income!: CreateIncomeDto[];

  @ApiProperty({ type: [CreateCarDto] })
  cars!: CreateCarDto[];

  @ApiProperty({ type: [CreateRealestateDto] })
  realestates!: CreateRealestateDto[];

  @ApiProperty({ type: [CreateMortgageDto] })
  mortgages!: CreateMortgageDto[];

  @ApiProperty({ type: [CreateOtherLoanDto] })
  otherLoans!: CreateOtherLoanDto[];

  @ApiProperty({ type: [CreateAllowanceDto] })
  allowances?: CreateAllowanceDto[];

  @ApiProperty({ type: [CreateBenefitDto] })
  benefits!: CreateBenefitDto[];
}
