import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve data basura del DTO
      forbidNonWhitelisted: true, // Para no enviar propiedades que no forman parte del DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
