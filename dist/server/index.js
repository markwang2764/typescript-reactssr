"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var config_1 = require("../config");
var KoaRouter = require("koa-router");
var favicon = require("koa-favicon");
var path = require("path");
var compress = require("koa-compress");
var webpack_dev_server_1 = require("../webpack/webpack-dev-server");
var bundle_1 = require("./bundle");
var app = new Koa();
var router = new KoaRouter();
router.get('/*', function (ctx, next) {
    var html = bundle_1.default.render();
    ctx.type = 'html';
    ctx.body = "\n    <div id=\"app\">" + html + "</div>\n  ";
    next();
});
if (config_1.isDev) {
    webpack_dev_server_1.default(app); // 仅在开发环境使用
}
app.use(compress()); // 压缩处理
app.use(favicon(path.join(__dirname, '../../public/favicon.ico'))); // favicon处理
app.use(router.routes())
    .use(router.allowedMethods()); // 路由处理
app.listen(config_1.port, function () {
    console.log("Koa app started at port " + config_1.port);
});
