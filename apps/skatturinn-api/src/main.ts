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

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Skatturinn API')
    .setDescription(
      'Backend service for the Icelandic Revenue and Customs (Skatturinn)'
    )
    .setVersion('v1.0.0')
    .setContact('Fuglar ehf.', 'https://www.fuglar.com/', 'fuglar@fuglar.com')
    .addServer('http://localhost:[port]/api', 'Development server')
    .addBearerAuth()
    .addApiKey({ type: 'apiKey', name: 'apiKey', in: 'header' }, 'API Key')
    .addExtension('x-category', ['personal', 'official'])
    .addExtension('x-pricing', ['free'])
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  writeFileSync(
    'apps/skatturinn-api/src/openapi.json',
    JSON.stringify(document, null, 2)
  );

  const port = 3001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `📚 Swagger docs available at: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();
