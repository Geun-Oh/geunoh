# geunoh

## repl.it을 활용하여 시작하는 첫 번째 프로젝트!!

last.fm 에서 가져온 OpenAPI를 활용한 음악 검색 사이트 제작

## 22.02.27 

styled-components를 이용하여 main page의 스타일을 적용하였고, detail page에 대한 정확한 스타일 디렉팅이 완료되지 않아 기본적인 것들만 해둔 상태이다. 추후에 더 다양한 url을 통해 엔진을 구체화할 생각도 있으나. 아마 나중의 얘기일 것 같다...!

## 22.03.05

  사이트의 프로토타입 배포에 드디어 성공했다. vite를 이용한 배포였고, CRA가 아니라서 살짝 당황했지만 롤업 기반이라서 그런지 가볍고 좋았다. 그리고 군대에서 첫 배포라니..! 사실 정적 사이트 배포도 확실하게 해본 적이 없어 조금 걱정이었는데 다행히 잘 실행되는 것 같다.

  앞으로 남은 것은 더 구체화한 기능들을 추가하는 것과 디자인을 수정하는 일!

### 2022.04.03

velopert 님의 '리액트를 다루는 기술' 연습을 위한 repo.
각각의 큰 단위별로 브랜치를 나눠 연습한다.

기존에 할 수 있던 API 불러와 페이지 구성하기나 컴포넌트 최적화와 같이 이론적인 내용의 경우 `velog`에 관련된 내용을 담아두었으므로
여기에서는 넘어가고 15장 `Context API` 부터 진행한다.

### 2022.04.04

리액트를 다루는 기술 15장 context-api에 대한 예제 실습 완료

### 22.04.14

리덕스와 리덕스 미들웨어에 대한 내용은 추후 조금씩 더 다룰 예정. 현재는 백엔드 관련 내용을 학습한다.

koa 프레임워크에 대한 내용을 학습하고 velog에 글을 게재하였다. 자세한 글은 
https://velog.io/@kandy1002/Koa-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EC%A0%91%ED%95%98%EA%B8%B0 
에서!

추가적으로 CRUD에 대한 구현중... postman으로 정확하게 다시 실현해보자!

### 22.05.12

최근 깃허브에는 커밋이 없었는데, 디자인 패턴과 타입스크립트에 대한 공부를 진행중이다.
타입스크립트는 타입스크립트 핸드북을 보고 정리한 내용을 velog에 업로드하고 있고, 
디자인 패턴은 한빛미디어의 '헤드 퍼스트 디자인 패턴(개정판)'을 보고 공부하고 있다.
기본적인 클래스에 대한 이해와 자바 클래스 메소드에 대한 이해가 추가적으로 필요해보인다.


### 22.05.16

velog에 타입스크립트 핸드북에 대한 내용을 정리하고 이해한 내용을 업로드하고 있다. 쭉 읽으면서 타입스크립트만의 장점을 파악하기 좋은 방법 같다.

### 22.05.18

국방오픈소스아카데미에서 클라우드 및 인프라 관련 강의를 수강 중. 커리어리를 통해 데브옵스 로드맵에 대한 질문을 하였다.

### 22.05.19

임건님과 프로젝트에 대해서 이런저런 얘기를 나누었다. 추가적으로 MVC와 MVVM에 대한 이해를 위해 관련 글을 읽었다.

### 22.05.22

velog에 제네릭에 대한 정리글을 올렸다. 타입에 관련된 내용만 더 다루면 typescript 개념잡기도 완료된다.

### 22.06.10

fetch 실패. 잠이나 자자~

### 22.08.14

Next.js 관련된 공부를 다시 시작한다. 기본적인 영상을 보고 나면 music-list 플젝을 리팩토링 해보자.

Next.js 를 이용해 쿠릉이 서비스를 리팩토링 해보고자 한다. 우선 Next.js로 지도를 띄우고 마커 등록 및 이벤트리스너까지 등록 완료 했다.
나머지 진행은 천천히 해보도록 하자.

branch 분리도 하자..! 물론 release가 시작되고 나면 말이다!

### 22.08.15

지도에 클릭 시 마커를 추가할 수 있도록 하였다.

대충 지도 만들어보는 중. 더 해보자!

### 22.08.18

무친...react-dom/server를 통해서 가져온  renderToString 메소드를 이용하면 JSX Element를 string으로 바꿔서 사용할 수 있다!!
이건 SSR에서 사용되기 좋아보인다. 대체로 Node 서버에서 사용된다고 하니, 잘 알아두자!

### 22.08.21

renderToString을 통해 서버에서 컴포넌트를 불러와 렌더링하는 것은 좋았지만, css적용하는게 여간 쉬운 일이 아니다.

styled-components 나 emotion 모두 다 추가적인 설정이 필요한건지...좀 더 공부해 볼 필요가 있다.

일단 css를 그냥 style 속성으로 작성하는 방식 말고는 생각이 안 난다...!

### 22.08.22

c++에 대한 실습 시작!

일단 cheerio 시도한다고 이것저것 해보았는데,
url 오류가 있는 것도 아닌데 계속 400 상태코드가 뜬다.
이에 대한 이유를 좀 더 알아보아야할 것 같다.

### 22.08.23

지도 위 overlay에 대한 description을 추가하고 디자인을 마무리해보자.

### 22.08.25

이펙티브 타입스크립트 스터디 1일차를 다 보았다.
너무 재밌다! 타입스크립트의 매력에 계속 빠져드는 것 같다.
내일 일어나서 마저 velog에 정리해보자.

### 22.08.27

이펙티브 타입스크립트 스터디 3번째 영상 정리를 마무리했다.
피곤쓰

이이이....nest 설정은 얼추 했는데
왜 라우팅이 아예 말을 안 듣는걸까

### 22.08.28

노마드코더의 nest 강의를 모오두 수강했다.
너무 재밌었다!!!
앞으로 typscript와 nest에 대해 더 열심히 공부하여
백엔드에서도 입지를 다질 수 있도록 연습해보자.

인프런 next-typescript 수업 시작.

### 22.09.05

- 인프런 nextjs 수업에서
  firebase를 이용한 구글 로그인 기능을 추가하였다.
  추후에 다른 소셜 로그인들도 구현해보자!

- .env 파일과 admin privateKey가 들어가있는 json 파일을 gitignore을 통해 올리지 않도록 변경했다.
  앞으로는 개인정보에 더 조심하자.

- resonance 파일 중 db.js에 개인 키와 시크릿 키를 업로드해두었던..것이 화근이었던 것 같다...
  앞으로는 꼭 조심합시다!!


### 22.09.06

추가적으로 사용자 API를 구현하고 있는데, 강의를 들으면서 계속 놓치는 부분이 생기는 것 같다.
다시 코드를 보면서 각 코드가 어떤 역할을 하는지 생각해보자.

### 22.09.08

유저 추가 모델에 대한 주석을 달고 있다.
계속 달면서 전체적인 코드 구조를 파악해보자!!

### 22.09.09

강의를 들으면서 느끼는 건데,,
바뀌지 않는 부분과 반복성을 띄는 부부을 따로 정리하는 것이 매우 중요해 보인다.

멤버 모델을 조회하는 기능을 추가하여
사용자가 로그인하면 해당 사용자의 정보를 띄워주는 기능 구현 중.