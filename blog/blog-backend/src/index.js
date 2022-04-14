/**
 * Koa 애플리케이션은 미들웨어의 배열로 구성되어 있다.
 * app.use 함수는 미들웨어 함수를 애플리케이션에 등록한다.
 */
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const api = require("./api");

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use("/api", api.routes()); // api 라우트 적용

//라우터를 app 인스턴스에 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용 -> 그래야 app과 router가 연동된다.
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log("Listening to port 4000");
});

/**
 * node src 를 통해 서버를 실행할 수 있다.
 * 본래 node를 통해 js 파일을 실행할 때는 node src/index.js와 같이 전체 경로를 입력해야 하지만, index.js 파일은 예외적으로 directory까지만 입력해도
 * 실행이 가능하다. index.js를 해당 directory를 대표하는 파일이라고 생각하면 좋다.
 */