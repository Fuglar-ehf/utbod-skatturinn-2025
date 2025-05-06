import { Body, Controller, Post } from '@nestjs/common';
import { RealestatesService } from './realestates.service';
import { CreateRealestateDto } from './dto/create-realestate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Realestates')
@Controller('realestates')
export class RealestatesController {
  constructor(private readonly realestatesService: RealestatesService) {}

  @Post()
  async create(@Body() dto: CreateRealestateDto) {
    return this.realestatesService.create(dto);
  }
}
