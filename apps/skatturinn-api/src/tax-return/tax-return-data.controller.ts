import { Body, Controller, Post, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTaxReturnDataDto } from './dto/create-tax-return-data.dto';
import { TaxReturnDataService } from './tax-return-data.service';

@ApiTags('Tax Return Data')
@Controller('tax-return-data')
export class TaxReturnDataController {
  constructor(private readonly taxReturnDataService: TaxReturnDataService) {}

  @Post()
  @ApiOperation({
    summary:
      'Create a new tax return data entry including income, cars, real estates, mortgages, and benefits',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Tax return data created successfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid data provided.',
  })
  async createTaxReturnData(
    @Body() createTaxReturnDataDto: CreateTaxReturnDataDto
  ) {
    return await this.taxReturnDataService.createTaxReturnData(
      createTaxReturnDataDto
    );
  }
}
