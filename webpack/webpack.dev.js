const path = require("path");

const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.base");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const devConfig = {
  mode: "development",
  plugins: [
    new ReactRefreshWebpackPlugin(), // 添加热更新插件 更新react组件不刷新浏览器 模块热更新,
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 1998,
    open: true,
    compress: false, // gzip压缩
    hot: true,
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
    },
  },
};

module.exports = merge(baseConfig, devConfig);
