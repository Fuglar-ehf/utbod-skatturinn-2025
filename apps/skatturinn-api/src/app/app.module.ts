import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RevenueController } from './revenue/revenue.controller';
import { RevenueService } from './revenue/revenue.service';

@Module({
  imports: [],
  controllers: [AppController, RevenueController],
  providers: [AppService, RevenueService],
})
export class AppModule {}
