import { of } from 'rxjs'
import { count, max, min, reduce } from 'rxjs/operators'

const obs$ = of(4, 2, 6, 10, 8) // 구독이 가능한 observable을 만들었다.

obs$.pipe(count()).subscribe(x => console.log("count: " + x))
obs$.pipe(max()).subscribe(x => console.log("max: " + x))
obs$.pipe(min()).subscribe(x => console.log("min: " + x))
obs$.pipe(reduce((acc, x) => acc + x, 0)).subscribe(x => console.log("reduce: " + x))