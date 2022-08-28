import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';

/**
 * 모듈은 앱 기능의 하나라고 보면 된다.
 * 인증을 담당하는 애플리케이션이 있다면, 그게 users 모듈이 되는 느낌!
 */

@Module({
  // 데코레이터이다. 클래스에 함수 기능을 추가하도록 해준다.
  imports: [MoviesModule],
  controllers: [], // 컨트롤러는 기본적으로 url을 가져오고 함수를 실행한다. 라우터의 기능을 한다.
  providers: [],
})
export class AppModule {}
