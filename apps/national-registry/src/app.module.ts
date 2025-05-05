import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Person } from './models/person.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.NATIONAL_REGISTRY_DB_HOST || 'localhost',
      port: parseInt(process.env.NATIONAL_REGISTRY_DB_PORT || '5433', 10),
      username: process.env.NATIONAL_REGISTRY_DB_USER || 'national_user',
      password: process.env.NATIONAL_REGISTRY_DB_PASSWORD || 'national_pass',
      database: process.env.NATIONAL_REGISTRY_DB_NAME || 'national_registry_db',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Person]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
