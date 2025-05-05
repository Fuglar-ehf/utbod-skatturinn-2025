import { Controller, Get } from '@nestjs/common';
import { NationalRegistryService } from './national-registry.service';

@Controller()
export class NationalRegistryController {
  constructor(private readonly nationalRegistryService: NationalRegistryService) {}

  @Get()
  getHello(): string {
    return this.nationalRegistryService.getHello();
  }
}
