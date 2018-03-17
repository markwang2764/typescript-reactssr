"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var lodash_1 = require("lodash");
var base_1 = require("./base");
var clientBaseConfig = lodash_1.cloneDeep(base_1.default);
clientBaseConfig.entry = {
    client: [
        './src/client/index.tsx',
    ],
    vendor: [
        'react',
        'react-dom',
    ],
};
var clientDevConfig = lodash_1.cloneDeep(clientBaseConfig); // 客户端开发环境配置
clientDevConfig.cache = false; // 禁用缓存
clientDevConfig.output.filename = '[name].js'; // 直接使用源文件名作为打包后文件名
clientDevConfig.module.rules.push(base_1.getTsRule('./src/webpack/tsconfig.client.json'));
clientDevConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    filename: 'vendor.js',
    name: 'vendor',
}), new webpack.NoEmitOnErrorsPlugin());
var clientProdConfig = lodash_1.cloneDeep(clientBaseConfig); // 客户端生产环境配置
// TODO 客户端生产环境配置暂不处理和使用
exports.default = {
    development: clientDevConfig,
    production: clientProdConfig,
};
