import { Body, Controller, Post } from '@nestjs/common';
import { MortgagesService } from './mortgages.service';
import { CreateMortgageDto } from './dto/create-mortgage.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mortgages')
@Controller('mortgages')
export class MortgagesController {
  constructor(private readonly mortgagesService: MortgagesService) {}

  @Post()
  async create(@Body() dto: CreateMortgageDto) {
    return this.mortgagesService.create(dto);
  }
}
