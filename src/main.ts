import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { HttpExceptionsFilter } from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<
    INestApplication | NestExpressApplication
  >(AppModule);

  // app.useGlobalFilters(new HttpExceptionsFilter());

  app.enableCors();

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     forbidNonWhitelisted: true,
  //     errorHttpStatusCode: 422,
  //   }),
  // );


    // Configurar ValidationPipe globalmente
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se encuentran propiedades no definidas en el DTO
      transform: true, // Transforma los datos a los tipos esperados
    }));

  const config = new DocumentBuilder()
    .setTitle('Prueba técnica')
    .setDescription('Este es una base de sistema')
    .setVersion('1.0')
    // .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  document.paths = Object.keys(document.paths)
    .sort((a, b) => a.localeCompare(b))
    .reduce((sortedPaths, key) => {
      sortedPaths[key] = document.paths[key];
      return sortedPaths;
    }, {});

  SwaggerModule.setup('', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
