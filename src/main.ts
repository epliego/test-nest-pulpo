import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Test NestJS Pulpo API')
    .setDescription('APIs Documentation Business Core Test NestJS Pulpo')
    .setVersion('1.0')
    .addTag('test_nest_pulpo')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
