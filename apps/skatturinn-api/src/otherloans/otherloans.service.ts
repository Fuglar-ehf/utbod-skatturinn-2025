import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OtherLoans } from '../models/otherloans.model';
import { CreateOtherLoanDto } from './dto/create-otherloan.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class OtherLoansService {
  constructor(
    @InjectModel(OtherLoans)
    private otherLoansModel: typeof OtherLoans
  ) {}

  async create(dto: CreateOtherLoanDto): Promise<OtherLoans> {
    return this.otherLoansModel.create(dto as CreationAttributes<OtherLoans>);
  }
}
