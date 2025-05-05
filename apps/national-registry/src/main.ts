import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const port = parseInt(process.env.PORT || '3000', 10);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  console.log(`National Registry API running on http://localhost:${port}`);
}
bootstrap();
