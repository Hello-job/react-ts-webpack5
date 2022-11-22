const path = require("path");

const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.base");

const CopyPlugin = require("copy-webpack-plugin");

const prodConfig = {
  mode: "production",
  entry: path.join(__dirname, "../src/components/index.ts"),
  output: {
    filename: "static/js/[name].js",
    path: path.join(__dirname, "../dist"),
    clean: true,
    publicPath: "/",
  },
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"), // 复制public下文件
          to: path.resolve(__dirname, "../dist"), // 复制到dist目录中
          filter: (source) => {
            // 忽略index.html
            return !source.includes("index.html");
          },
        },
      ],
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
