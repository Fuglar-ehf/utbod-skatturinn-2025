import { ApiProperty } from '@nestjs/swagger';

export class CreateIncomeDto {
  @ApiProperty()
  taxreturn_id!: number;

  @ApiProperty()
  employer_national_id!: string;

  @ApiProperty()
  employer!: string;

  @ApiProperty()
  income!: number;
}

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

export class CreateMortgageDto {
  @ApiProperty()
  taxreturn_id!: number;

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

export class CreateBenefitDto {
  @ApiProperty()
  taxreturn_id!: number;

  @ApiProperty()
  from?: string;

  @ApiProperty()
  amount!: number;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  type_of_benefit!: string;
}

export class CreateTaxReturnDataDto {
  @ApiProperty({ type: [CreateIncomeDto] })
  income!: CreateIncomeDto[];

  @ApiProperty({ type: [CreateCarDto] })
  cars!: CreateCarDto[];

  @ApiProperty({ type: [CreateRealestateDto] })
  realestates!: CreateRealestateDto[];

  @ApiProperty({ type: [CreateMortgageDto] })
  mortgages!: CreateMortgageDto[];

  @ApiProperty({ type: [CreateBenefitDto] })
  benefits!: CreateBenefitDto[];
}
