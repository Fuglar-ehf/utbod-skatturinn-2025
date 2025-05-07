import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Person } from '../models/person.model';
import { NationalRegistryService } from './national-registry.service';
import { NationalRegistryController } from './national-registry.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.NATIONAL_REGISTRY_DB_HOST || 'localhost',
      port: parseInt(process.env.NATIONAL_REGISTRY_DB_PORT || '5433', 10),
      username: process.env.NATIONAL_REGISTRY_DB_USER || 'national_user',
      password: process.env.NATIONAL_REGISTRY_DB_PASSWORD || 'national_pass',
      database:
        process.env.DBNATIONAL_REGISTRY_DB_NAME_NAME || 'national_registry_db',
      models: [Person],
      autoLoadModels: true,
      synchronize: false,
    }),
    SequelizeModule.forFeature([Person]),
  ],
  providers: [NationalRegistryService],
  controllers: [NationalRegistryController],
})
export class AppModule {}
