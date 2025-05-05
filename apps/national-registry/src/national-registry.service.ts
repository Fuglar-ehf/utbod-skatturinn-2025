import { Injectable } from '@nestjs/common';

@Injectable()
export class NationalRegistryService {
  getHello(): string {
    return 'Hello World!';
  }
}
