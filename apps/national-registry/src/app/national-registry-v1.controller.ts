import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Version,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Person } from '../models/person.model';
import { NationalRegistryService } from './national-registry.service';

@ApiTags('People')
@Controller('people')
export class NationalRegistryV1Controller {
  constructor(
    private readonly nationalRegistryService: NationalRegistryService
  ) {}

  @Version('1')
  @Get(':national_id')
  @ApiOperation({
    summary: 'Get a person by national ID',
    description:
      'Retrieves an individual from the national registry using their national ID.',
  })
  @ApiParam({
    name: 'national_id',
    description: 'The national ID of the person to be retrieved',
    example: '1234567890',
  })
  @ApiResponse({
    status: 200,
    description: 'The person details retrieved successfully.',
    type: Person,
  })
  @ApiResponse({
    status: 404,
    description: 'Person with the specified national ID not found.',
  })
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
