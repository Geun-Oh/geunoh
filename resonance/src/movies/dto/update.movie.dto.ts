import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
/**
 * class-validator는 클래스의 요소들에 대한 유효성을 검증하여
 * 외부로부터 잘못된 형태의 데이터 요청이 들어오지 못하게 막는다.
 */

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
