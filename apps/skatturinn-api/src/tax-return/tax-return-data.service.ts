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
import { Allowances } from '../models/allowances.model';

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
    @InjectModel(Allowances)
    private readonly allowancesModel: typeof Allowances,
    @Inject(Sequelize) private readonly sequelize: Sequelize
  ) {}

  async createTaxReturnData(createTaxReturnDataDto: CreateTaxReturnDataDto) {
    const transaction = await this.sequelize.transaction();

    try {
      const { nationalid, year } = createTaxReturnDataDto;

      // Check if tax return exists for this nationalid and year
      let taxReturn = await this.taxReturnModel.findOne({
        where: { nationalId: nationalid, year: parseInt(year) },
        transaction,
      });

      // If not found, create a new TaxReturn
      if (!taxReturn) {
        taxReturn = await this.taxReturnModel.create(
          {
            nationalId: nationalid,
            year: parseInt(year),
          },
          { transaction }
        );
      }

      // Use the taxreturn_id for related entries
      await Promise.all([
        ...createTaxReturnDataDto.income.map((income) =>
          this.incomeModel.create(
            { ...income, taxreturn_id: taxReturn.id },
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.cars.map((car) =>
          this.carsModel.create(
            { ...car, taxreturn_id: taxReturn.id },
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.realestates.map((realestate) =>
          this.realestatesModel.create(
            { ...realestate, taxreturn_id: taxReturn.id },
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.mortgages.map((mortgage) =>
          this.mortgagesModel.create(
            { ...mortgage, taxreturn_id: taxReturn.id },
            { transaction }
          )
        ),
        ...createTaxReturnDataDto.otherLoans.map((otherLoan) =>
          this.otherLoansModel.create(
            { ...otherLoan, taxreturn_id: taxReturn.id },
            { transaction }
          )
        ),
        ...(createTaxReturnDataDto.benefits?.map((benefit) =>
          this.benefitsModel.create(
            { ...benefit, taxreturn_id: taxReturn.id },
            { transaction }
          )
        ) ?? []),
        ...(createTaxReturnDataDto.allowances?.map((allowance) =>
          this.allowancesModel.create(
            { ...allowance, taxreturn_id: taxReturn.id },
            { transaction }
          )
        ) ?? []),
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
