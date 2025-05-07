import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxReturn } from '../models/taxreturn.model';
import { Income } from '../models/income.model';
import { Cars } from '../models/cars.model';
import { Realestates } from '../models/realestates.model';
import { Mortgages } from '../models/mortgages.model';
import { OtherLoans } from '../models/otherloans.model';
import { Benefits } from '../models/benefits.model';
import { IncomeController } from '../income/income.controller';
import { IncomeService } from '../income/income.service';
import { CarsController } from '../cars/cars.controller';
import { CarsService } from '../cars/cars.service';
import { RealestatesController } from '../realestates/realestates.controller';
import { RealestatesService } from '../realestates/realestates.service';
import { MortgagesController } from '../mortgages/mortgages.controller';
import { MortgagesService } from '../mortgages/mortgages.service';
import { OtherLoansController } from '../otherloans/otherloans.controller';
import { OtherLoansService } from '../otherloans/otherloans.service';
import { BenefitsService } from '../benefits/benefits.service';
import { BenefitsController } from '../benefits/benefits.controller';
import { TaxReturnDataModule } from '../tax-return/tax-return-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.SKATTUR_DB_PORT || '5432', 10),
      username: process.env.SKATTUR_DB_USER || 'skattur_user',
      password: process.env.SKATTUR_DB_PASSWORD || 'skattur_pass',
      database: process.env.SKATTUR_DB_NAME || 'skattur_db',
      autoLoadModels: true,
      synchronize: false,
      models: [
        TaxReturn,
        Income,
        Cars,
        Realestates,
        Mortgages,
        OtherLoans,
        Benefits,
      ],
    }),
    SequelizeModule.forFeature([
      Income,
      Cars,
      Realestates,
      Mortgages,
      OtherLoans,
      Benefits,
    ]),
    TaxReturnDataModule,
  ],
  controllers: [
    AppController,
    IncomeController,
    CarsController,
    RealestatesController,
    MortgagesController,
    OtherLoansController,
    BenefitsController,
  ],
  providers: [
    AppService,
    IncomeService,
    CarsService,
    RealestatesService,
    MortgagesService,
    OtherLoansService,
    BenefitsService,
  ],
})
export class AppModule {}
