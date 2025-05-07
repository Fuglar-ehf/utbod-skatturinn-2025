import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateTaxReturnDataDto } from './dto/create-tax-return-data.dto';
import { TaxReturn } from '../models/taxreturn.model';
import { Income } from '../models/income.model';
import { Cars } from '../models/cars.model';
import { Realestates } from '../models/realestates.model';
import { Mortgages } from '../models/mortgages.model';
import { OtherLoans } from '../models/otherloans.model';
import { Benefits } from '../models/benefits.model';

@Injectable()
export class TaxReturnDataService {
  constructor(
    @InjectModel(TaxReturn) private readonly taxReturnModel: typeof TaxReturn,
    @InjectModel(Income) private readonly incomeModel: typeof Income,
    @InjectModel(Cars) private readonly carsModel: typeof Cars,
    @InjectModel(Realestates)
    private readonly realestatesModel: typeof Realestates,
    @InjectModel(Mortgages) private readonly mortgagesModel: typeof Mortgages,
    @InjectModel(OtherLoans)
    private readonly otherLoansModel: typeof OtherLoans,
    @InjectModel(Benefits) private readonly benefitsModel: typeof Benefits,
    @Inject(Sequelize) private readonly sequelize: Sequelize
  ) {}

  async createTaxReturnData(createTaxReturnDataDto: CreateTaxReturnDataDto) {
    const transaction = await this.sequelize.transaction();

    try {
      const taxReturn = await this.taxReturnModel.create({}, { transaction });

      await Promise.all([
        ...createTaxReturnDataDto.income.map((income) =>
          this.incomeModel.create(
            {
              taxreturn_id: taxReturn.id,
              employer_national_id: income.employer_national_id,
              employer: income.employer,
              income: income.income,
            } as Partial<Income>,
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.cars.map((car) =>
          this.carsModel.create(
            {
              taxreturn_id: taxReturn.id,
              year_bought: car.year_bought,
              registration_number: car.registration_number,
              amount: car.amount,
            } as Partial<Cars>,
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.realestates.map((realestate) =>
          this.realestatesModel.create(
            {
              taxreturn_id: taxReturn.id,
              address: realestate.address,
              registration_number: realestate.registration_number,
              realastate_value: realestate.realastate_value,
            } as Partial<Realestates>,
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.mortgages.map((mortgage) =>
          this.mortgagesModel.create(
            {
              taxreturn_id: taxReturn.id,
              year_bought: mortgage.year_bought,
              date: new Date(mortgage.date), // Convert string to Date
              amount: mortgage.amount,
              address: mortgage.address,
              loan_id: mortgage.loan_id,
              period_of_loan: mortgage.period_of_loan,
              loan_provider: mortgage.loan_provider,
              loan_provider_national_id: mortgage.loan_provider_national_id,
              principal: mortgage.principal,
              interest: mortgage.interest,
              remaining: mortgage.remaining,
            } as Partial<Mortgages>,
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.benefits.map((benefit) =>
          this.benefitsModel.create(
            {
              taxreturn_id: taxReturn.id,
              from: benefit.from,
              amount: benefit.amount,
              name: benefit.name,
              type_of_benefit: benefit.type_of_benefit,
            } as Partial<Benefits>,
            { transaction }
          )
        ),
      ]);

      await transaction.commit();
      return {
        message: 'Tax return data created successfully',
        taxReturnId: taxReturn.id,
      };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
