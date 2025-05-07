import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const globalPrefix = 'national-registry';
  app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
    .setTitle('National Registry API')
    .setDescription('Mock API for National Registry service')
    .setVersion('v1.0.0')
    .setContact('Fuglar ehf.', 'https://www.fuglar.com/', 'fuglar@fuglar.com')
    .addServer(
      'http://localhost:[port]/national-registry',
      'Development server'
    )
    .addExtension('x-category', ['personal', 'official'])
    .addExtension('x-pricing', ['free'])
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  writeFileSync(
    'apps/national-registry/src/openapi.json',
    JSON.stringify(document, null, 2)
  );

  const port = process.env.NATIONAL_REGISTRY_API_PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `📚 Swagger docs available at: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();
