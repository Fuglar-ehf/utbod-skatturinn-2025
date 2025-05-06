import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { NationalRegistryService } from './national-registry.service';
import { Person } from './models/person.model';

@Controller('people')
export class NationalRegistryController {
  constructor(
    private readonly nationalRegistryService: NationalRegistryService
  ) {}

  @Get(':national_id')
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
