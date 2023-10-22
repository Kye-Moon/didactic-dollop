import { NestFactory } from '@nestjs/core';
import { AppModule } from './resources/app/app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(4000);
}

bootstrap();
