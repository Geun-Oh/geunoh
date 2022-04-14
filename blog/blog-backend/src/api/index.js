const Router = require("koa-router");
const api = new Router();

api.get("/test", ctx => {
    ctx.body = "성공";
});

// 라우터 내보내기
module.exports = api;