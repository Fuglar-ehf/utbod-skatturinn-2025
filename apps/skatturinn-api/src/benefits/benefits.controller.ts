import { Body, Controller, Post } from '@nestjs/common';
import { BenefitsService } from './benefits.service';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Benefits')
@Controller('benefits')
export class BenefitsController {
  constructor(private readonly benefitsService: BenefitsService) {}

  @Post()
  async create(@Body() dto: CreateBenefitDto) {
    return this.benefitsService.create(dto);
  }
}
