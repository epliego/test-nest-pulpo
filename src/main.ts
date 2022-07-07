import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Test NestJS Pulpo API')
    .setDescription('APIs Documentation Business Core Test NestJS Pulpo')
    .setVersion('1.0')
    // .addTag('test_nest_pulpo')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
  app.enableCors(); // Problem flutter web. Consulted (07-2021) in: https://docs.nestjs.com/security/cors
  await app.listen(3001);
}
bootstrap();
