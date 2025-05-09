import { Body, Controller, Post, HttpStatus, Version } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateTaxReturnDataDto } from './dto/create-tax-return-data.dto';
import { TaxReturnDataService } from './tax-return-data.service';

@ApiTags('Tax Return Data')
@Controller('tax-return-data')
export class TaxReturnDataV1Controller {
  constructor(private readonly taxReturnDataService: TaxReturnDataService) {}

  @Version('1')
  @Post()
  @ApiOperation({
    summary: 'Create a new tax return data',
    description:
      'Create a new tax return data entry including income, cars, real estates, mortgages, and benefits',
  })
  @ApiBody({
    description: 'The payload to create tax return data',
    type: CreateTaxReturnDataDto,
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
