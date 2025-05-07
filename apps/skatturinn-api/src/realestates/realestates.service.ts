import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Realestates } from '../models/realestates.model';
import { CreateRealestateDto } from './dto/create-realestate.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class RealestatesService {
  constructor(
    @InjectModel(Realestates)
    private realestatesModel: typeof Realestates
  ) {}

  async create(dto: CreateRealestateDto): Promise<Realestates> {
    return this.realestatesModel.create(dto as CreationAttributes<Realestates>);
  }
}
