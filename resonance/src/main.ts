import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * nest의 처음 시작이 되는 파일이다.
 * 만들어진 모든 모듈을 종합하여 app으로 만든다.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 누가 유효하지 않은 요청을 보내면 처음부터 이를 막아버릴 수 있게 설정.
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 들어오는 데이터를 dto에 맞는 타입으로 자동 형변환을 해준다!
    }),
  );
  await app.listen(3000);
}
bootstrap();
