import { of, map, first } from 'rxjs';

of(1, 2, 3)
    .pipe(map(x => x * x))
    .subscribe((v => console.log(`value: ${v}`)))

of(1, 2, 3)
    .pipe(first()) // observable에서 가장 첫 요소만 추출
    .subscribe((v => console.log(`value: ${v}`)))