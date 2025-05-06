import { Injectable } from '@nestjs/common';
import { CreateRevenueDto } from './create-revenue.dto';

@Injectable()
export class RevenueService {
  create(dto: CreateRevenueDto) {
    // Just a placeholder
    return { message: 'Revenue received', payload: dto };
  }
}
