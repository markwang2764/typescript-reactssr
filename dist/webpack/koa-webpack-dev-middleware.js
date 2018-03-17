"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpackDevMiddleware = require("webpack-dev-middleware");
exports.default = function (compiler, opts) {
    var devMiddleware = webpackDevMiddleware(compiler, opts);
    var koaMiddleware = function (ctx, next) {
        var res = {};
        res.end = function (data) {
            ctx.body = data;
        };
        res.setHeader = function (name, value) {
            ctx.headers[name] = value;
            if (name === 'Content-Type' && typeof value === 'string') {
                ctx.type = value;
            }
        };
        return devMiddleware(ctx.req, res, next);
    };
    Object.keys(devMiddleware).forEach(function (p) {
        koaMiddleware[p] = devMiddleware[p];
    });
    return koaMiddleware;
};
