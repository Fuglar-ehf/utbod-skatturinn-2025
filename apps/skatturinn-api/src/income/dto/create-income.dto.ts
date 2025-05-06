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
