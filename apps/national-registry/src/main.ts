import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const port = parseInt(process.env.PORT || '3000', 10);
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('National Registry API')
    .setDescription(
      'API for looking up individuals in the National Registry (Þjóðskrá) from mock data'
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  console.log(`Swagger ready at http://localhost:${port}/api`);
}
bootstrap();
