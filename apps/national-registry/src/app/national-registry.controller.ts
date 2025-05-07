import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Person } from '../models/person.model';
import { NationalRegistryService } from './national-registry.service';

@ApiTags('People')
@Controller('people')
export class NationalRegistryController {
  constructor(
    private readonly nationalRegistryService: NationalRegistryService
  ) {}

  @Get(':national_id')
  @ApiOkResponse({ type: Person })
  async getByNationalId(
    @Param('national_id') national_id: string
  ): Promise<Person> {
    const person = await this.nationalRegistryService.findByNationalId(
      national_id
    );
    if (!person) {
      throw new NotFoundException(
        `Person with national id ${national_id} not found`
      );
    }
    return person;
  }
}
