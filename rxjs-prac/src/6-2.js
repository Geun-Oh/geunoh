const { merge, interval, fromEvent } = rxjs;
const { map } = rxjs.operators;

const interval$ = interval(1000).pipe(map(_ => 'interval'));
const click$ = fromEvent(document, 'click').pipe(map(_ => 'click'));

merge(interval$, click$).subscribe(console.log);