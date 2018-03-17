"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.baseDir = path.resolve(__dirname, '../..');
exports.getTsRule = function (configFileName) { return ({
    test: /\.tsx?$/,
    use: [
        {
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: configFileName,
            },
        },
    ],
}); };
var baseConfig = {
    module: {
        rules: [],
    },
    output: {
        path: path.resolve(exports.baseDir, './bundle'),
        publicPath: '/assets/',
    },
    plugins: [],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
};
exports.default = baseConfig;
