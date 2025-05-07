import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Income } from '../models/income.model';
import { CreateIncomeDto } from './dto/create-income.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class IncomeService {
  constructor(
    @InjectModel(Income)
    private incomeModel: typeof Income
  ) {}

  async create(dto: CreateIncomeDto): Promise<Income> {
    return this.incomeModel.create(dto as CreationAttributes<Income>);
  }
}
