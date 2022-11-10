import { Subject } from "rxjs";

const subject = new Subject();

setTimeout(() => {
    let x = 0;
    setInterval(() => {
        subject.next(x++);
    }, 2000)
}, 5000)

subject.subscribe(x => console.log('바로구독: ' + x))
setTimeout(() => {
    subject.subscribe(x => console.log('3초 후 구독: ' + x))
}, 3000)
setTimeout(() => {
    subject.subscribe(x => console.log('10초 후 구독: ' + x))
}, 10000)
setTimeout(() => {
    subject.subscribe(x => console.log('14초 후 구독: ' + x))
}, 14000)