import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReturnDataV1Controller } from './tax-return-data-v1.controller';
import { TaxReturnDataService } from './tax-return-data.service';
import { TaxReturn } from '../models/taxreturn.model';
import { Income } from '../models/income.model';
import { Cars } from '../models/cars.model';
import { Realestates } from '../models/realestates.model';
import { Mortgages } from '../models/mortgages.model';
import { OtherLoans } from '../models/otherloans.model';
import { Benefits } from '../models/benefits.model';
import { Allowances } from '../models/allowances.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      TaxReturn,
      Income,
      Cars,
      Realestates,
      Mortgages,
      OtherLoans,
      Allowances,
      Benefits,
    ]),
  ],
  controllers: [TaxReturnDataV1Controller],
  providers: [TaxReturnDataService],
})
export class TaxReturnDataModule {}
