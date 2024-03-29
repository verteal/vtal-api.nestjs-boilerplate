import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import { HttpException } from './infra/web/filters/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('[Boilerplate name] - VTAL API')
    .setDescription('Sample description')
    .setVersion('1.0')
    .addTag('example')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  app.useGlobalFilters(new HttpException())

  await app.listen(8000)
}

bootstrap()
