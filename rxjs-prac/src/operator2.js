import { from } from 'rxjs'
import { first, last, elementAt, filter, distinct, count, max, reduce, tap } from 'rxjs/operators'

const obs$ = from([
    9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2
])

obs$.pipe(
    distinct(),
    tap(x => console.log("----------------처음 탭: ", x)),
    filter(x => x % 2 == 1),
    tap(x => console.log("----------------필터 후: ", x)),
    reduce((acc, cur) => acc + cur, 0)
).subscribe(x => console.log("result: " + x))