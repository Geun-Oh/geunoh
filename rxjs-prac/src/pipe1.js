/**
 * Observable의 데이터를 순수 함수로 가공
 * -> 현존하는 데이터를 수정하지 않음
 */

import { range } from "rxjs";
import { tap, filter, map } from "rxjs/operators";

const obs$ = range(1, 10);

const observer = {
  next: (x) => console.log(x + "발행"),
  error: (err) => console.error("발행 중 오류", err),
  complete: (_) => console.log("발행을 완결"),
};

obs$
  .pipe(
    tap(console.log),
    filter((x) => x % 2 === 0),
    map((x) => x * x)
  ) // 순수 함수로 observable의 데이터를 가공할 수 있다.
  .subscribe(observer);
