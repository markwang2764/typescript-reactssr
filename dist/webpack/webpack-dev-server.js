"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var koa_webpack_dev_middleware_1 = require("./koa-webpack-dev-middleware");
var client_1 = require("./client");
exports.default = function (app) {
    var clientDevConfig = client_1.default.development;
    var clientCompiler = webpack(clientDevConfig);
    var output = clientDevConfig.output;
    var devMiddlewareOptions = {
        publicPath: output.publicPath,
        stats: {
            chunks: false,
            colors: true,
        },
    };
    app.use(koa_webpack_dev_middleware_1.default(clientCompiler, devMiddlewareOptions));
};
