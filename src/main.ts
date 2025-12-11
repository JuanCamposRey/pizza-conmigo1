import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { METHODS } from 'http';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔓 Esto permite que React se conecte
  

  app.enableCors({
    origin: ["https://pizza-conmigo1.onrender.com",
      "http://localhost:3000",
    "https://pizza-conmigo.web.app"
  ], 
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials:true,
  });
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);

 await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

