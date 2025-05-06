import { Controller, Post, Body } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { CreateRevenueDto } from './create-revenue.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('skattur')
@Controller('skattur')
export class RevenueController {
  constructor(private readonly service: RevenueService) {}

  @Post()
  create(@Body() dto: CreateRevenueDto) {
    return this.service.create(dto);
  }
}
