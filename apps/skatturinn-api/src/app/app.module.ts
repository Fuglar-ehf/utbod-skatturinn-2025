import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { TaxReturn } from '../models/taxreturn.model';
import { Income } from '../models/income.model';
import { Cars } from '../models/cars.model';
import { Realestates } from '../models/realestates.model';
import { Mortgages } from '../models/mortgages.model';
import { OtherLoans } from '../models/otherloans.model';
import { Benefits } from '../models/benefits.model';
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
  controllers: [],
  providers: [],
})
export class AppModule {}
