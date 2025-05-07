import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReturnDataController } from './tax-return-data.controller';
import { TaxReturnDataService } from './tax-return-data.service';
import { TaxReturn } from '../models/taxreturn.model';
import { Income } from '../models/income.model';
import { Cars } from '../models/cars.model';
import { Realestates } from '../models/realestates.model';
import { Mortgages } from '../models/mortgages.model';
import { OtherLoans } from '../models/otherloans.model';
import { Benefits } from '../models/benefits.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      TaxReturn,
      Income,
      Cars,
      Realestates,
      Mortgages,
      OtherLoans,
      Benefits,
    ]),
  ],
  controllers: [TaxReturnDataController],
  providers: [TaxReturnDataService],
})
export class TaxReturnDataModule {}
