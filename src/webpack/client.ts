import * as path from 'path';
import * as webpack from 'webpack';

import { cloneDeep } from 'lodash';

import baseConfig, { baseDir, getTsRule } from './base';

const clientBaseConfig: webpack.Configuration = cloneDeep(baseConfig);

clientBaseConfig.entry = {
  client: [
    './src/client/index.tsx',
  ],
  vendor: [
    'react',
    'react-dom',
  ],
};
const clientDevConfig: webpack.Configuration = cloneDeep(clientBaseConfig); // 客户端开发环境配置

clientDevConfig.cache = false; // 禁用缓存
clientDevConfig.output.filename = '[name].js'; // 直接使用源文件名作为打包后文件名
(clientDevConfig.module as webpack.NewModule).rules.push(
  getTsRule('./src/webpack/tsconfig.client.json'),
);
clientDevConfig.plugins.push(
  new webpack.optimize.CommonsChunkPlugin({ // 提取公共代码到vendor.js中去
    filename: 'vendor.js',
    name: 'vendor',
  }),
  new webpack.NoEmitOnErrorsPlugin(), // 编译出错时跳过输出阶段，以保证输出的资源不包含错误。
);

const clientProdConfig: webpack.Configuration = cloneDeep(clientBaseConfig); // 客户端生产环境配置

// TODO 客户端生产环境配置暂不处理和使用

export default {
  development: clientDevConfig,
  production: clientProdConfig,
};
