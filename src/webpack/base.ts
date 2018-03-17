import * as path from 'path';
import * as webpack from 'webpack';
export const baseDir = path.resolve(__dirname, '../..');
export const getTsRule = (configFileName) => ({
  test: /\.tsx?$/,
  use: [
    {
      loader: 'awesome-typescript-loader',
      options: {
        configFileName,
      },
    },
  ],
});
const baseConfig: webpack.Configuration = {
  module: {
    rules: [],
  },
  output: {
    path: path.resolve(baseDir, './bundle'),
    publicPath: '/assets/',
  },
  plugins: [],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'], // 用于webpack查找文件时自行补全文件后缀
  },
};
export default baseConfig;
