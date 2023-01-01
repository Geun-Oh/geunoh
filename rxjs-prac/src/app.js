const { fromEvent } = rxjs
const { timeInterval, scan, tap, map } = rxjs.operators

const click$ = fromEvent(document, 'click').pipe(
    timeInterval(),
    map(x => x.interval),
    scan((acc, i) => acc + i, 0)
).subscribe(console.log)

click$