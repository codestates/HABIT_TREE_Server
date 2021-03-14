import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as morgan from 'morgan';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/home/ubuntu/key.pem'),
    cert: fs.readFileSync('/home/ubuntu/cert.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  app.use(morgan('dev'));

  app.enableCors({
    origin: ['https://localhost:3000', 'https://habittree.tk'],
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Habit Tree!')
    .setDescription('The Habit Tree API description')
    .setVersion('1.0')
    .addTag('Tree')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
