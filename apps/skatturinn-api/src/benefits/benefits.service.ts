import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Benefits } from '../models/benefits.model';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class BenefitsService {
  constructor(
    @InjectModel(Benefits)
    private benefitsModel: typeof Benefits
  ) {}

  async create(dto: CreateBenefitDto): Promise<Benefits> {
    return this.benefitsModel.create(dto as CreationAttributes<Benefits>);
  }
}
