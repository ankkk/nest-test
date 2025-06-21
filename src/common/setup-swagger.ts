import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const swaggerBuilder = new DocumentBuilder()
    .setTitle('API NESTJS TEST')
    .setDescription('Test documentation for NestJS application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerBuilder);

  SwaggerModule.setup('docs', app, document);
}
