import { ApiProperty } from '@nestjs/swagger';

export class CreateRevenueDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  income!: number;
}
