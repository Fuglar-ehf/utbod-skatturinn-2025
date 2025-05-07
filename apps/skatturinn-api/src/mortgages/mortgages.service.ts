import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Mortgages } from '../models/mortgages.model';
import { CreateMortgageDto } from './dto/create-mortgage.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class MortgagesService {
  constructor(
    @InjectModel(Mortgages)
    private mortgagesModel: typeof Mortgages
  ) {}

  async create(dto: CreateMortgageDto): Promise<Mortgages> {
    return this.mortgagesModel.create(dto as CreationAttributes<Mortgages>);
  }
}
