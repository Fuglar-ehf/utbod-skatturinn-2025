import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cars } from '../models/cars.model';
import { CreateCarDto } from './dto/create-car.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Cars)
    private carsModel: typeof Cars
  ) {}

  async create(dto: CreateCarDto): Promise<Cars> {
    return this.carsModel.create(dto as CreationAttributes<Cars>);
  }
}
