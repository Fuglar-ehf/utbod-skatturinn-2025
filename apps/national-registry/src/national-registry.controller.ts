import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { NationalRegistryService } from './national-registry.service';
import { Person } from './models/person.model';

@Controller('people')
export class NationalRegistryController {
  constructor(
    private readonly nationalRegistryService: NationalRegistryService
  ) {}

  @Get(':kennitala')
  async getByKennitala(@Param('kennitala') kennitala: string): Promise<Person> {
    const person = await this.nationalRegistryService.findByKennitala(
      kennitala
    );
    if (!person) {
      throw new NotFoundException(
        `Person with kennitala ${kennitala} not found`
      );
    }
    return person;
  }
}
