import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Person } from '../models/person.model';

@Injectable()
export class NationalRegistryService {
  constructor(
    @InjectModel(Person)
    private readonly personModel: typeof Person
  ) {}

  async findByNationalId(national_id: string): Promise<Person | null> {
    return this.personModel.findOne({ where: { national_id: national_id } });
  }
}
