import { Body, Controller, Post } from '@nestjs/common';
import { OtherLoansService } from './otherloans.service';
import { CreateOtherLoanDto } from './dto/create-otherloan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('OtherLoans')
@Controller('otherloans')
export class OtherLoansController {
  constructor(private readonly otherLoansService: OtherLoansService) {}

  @Post()
  async create(@Body() dto: CreateOtherLoanDto) {
    return this.otherLoansService.create(dto);
  }
}
