import { Body, Controller, Post } from '@nestjs/common';
import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Income')
@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  async create(@Body() dto: CreateIncomeDto) {
    return this.incomeService.create(dto);
  }
}
