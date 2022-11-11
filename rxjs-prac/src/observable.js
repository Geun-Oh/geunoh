import { BehaviorSubject, ReplaySubject, interval } from 'rxjs'
const subject = new BehaviorSubject(0) // 초기값이 있음
const sub = new ReplaySubject(3)

const obs$ = interval(1000)

obs$.subscribe(subject)
obs$.subscribe(sub)

subject.subscribe((x) => console.log('A: ' + x))
 
setTimeout(() => {
    sub.subscribe((x) => console.log('B: ' + x))
}, 5000)


// 독립적인 옵저버 생성

// import { interval, from } from 'rxjs';

// const obs$ = from([1, 2, 3, 4, 5])
// const obs1$ = interval(1000)
// const observer = {
//     next: console.log,
//     error: err => console.error('발행중 오류', err),
//     complete: () => console.log('발행 완결'),
// }

// obs$.subscribe(observer)
// const sub = obs1$.subscribe(
//     console.log,
// )

// setTimeout(_ => sub.unsubscribe(), 5000)

// 직접 만드는 스트림
// 직접 만드는 스트림의 경우에는 subscriber.complete를 통해 메모리에서 구독을 해제해주어야한다.

// const { Observable } = rxjs;

// const obs$ = new Observable(subscriber => {
//     subscriber.next(1)
//     subscriber.next(2)
//     subscriber.next(3)

//     subscriber.complete()
// })

// obs$.subscribe(item => console.log(item))

// Ajax를 통한 스트림

// const { ajax } = rxjs.ajax;

// const obs$ = ajax('https://jsonplaceholder.typicode.com/todos/1')

// obs$.subscribe(res => console.log(res.response))

// 이벤트에 의한 스트림

// const { fromEvent } = rxjs;
// const obs1$ = fromEvent(document, 'click');
// const obs2$ = fromEvent(document.getElementById('myInput'), 'keypress')

// obs1$.subscribe(item => console.log(item))
// obs2$.subscribe(item => console.log(item.target.value))

// 시간에 의한 스트림

// const { interval, timer } = rxjs;

// const obs1$ = interval(1000)
// const obs2$ = timer(3000)

// 배열된 스트림

// const { of, from, range, generate } = rxjs;

// const obs1$ = of(1, 2, 3, 4, 5)
// const obs2$ = from([6, 7, 8, 9, 10])
// const obs3$ = range(11, 5)
// const obs4$ = generate(
//     15, x => x < 30, x => x + 2
// )

// obs1$.subscribe(item => console.log(`${item}`))
// obs2$.subscribe(item => console.log(`${item}`))
// obs3$.subscribe(item => console.log(`${item}`))
// obs4$.subscribe(item => console.log(`${item}`))