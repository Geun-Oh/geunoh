// const { merge, interval, fromEvent } = rxjs;
// const { map } = rxjs.operators;

// const interval$ = interval(1000).pipe(map(_ => 'interval'));
// const click$ = fromEvent(document, 'click').pipe(map(_ => 'click'));

// merge(interval$, click$).subscribe(console.log);

import { merge, concat, interval } from 'rxjs';
import { mergeMap, map, take } from 'rxjs/operators';

const intv1$ = interval(1000).pipe(map(() => "INTERVAL 1"), take(5))
const intv2$ = interval(1000).pipe(map(() => "INTERVAL 2"), take(3))
const intv3$ = interval(1000).pipe(map(() => "INTERVAL 3"), take(3))
const intv4$ = interval(1000).pipe(map(() => "INTERVAL 4"), take(9))
const intv5$ = interval(1000).pipe(map(() => "INTERVAL 5"), take(9))

// merge(intv1$, intv2$, intv3$, intv4$, intv5$, 3).subscribe(console.log)

// concat(intv1$, intv2$, intv3$).subscribe(console.log)

concat(intv1$)