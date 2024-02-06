/*
 * @Author: Aaron
 * @Date: 2020-05-03 22:01:27
 * @LastEditors: Aaron
 * @LastEditTime: 2020-05-05 19:49:59
 * @Description: file content
 */
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool : '#cheap-module-eval-source-map',
    entry: {
      index:"./src/index.js",
      reader:"./src/reader.js",
      user:"./src/user.js"
    },
      
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            { from: "./src/index.html", to: "index.html" },
            {
                from: __dirname + '/css',
                to: __dirname + '/dist/css',
            } 
        ]),
        new CopyWebpackPlugin([
          { from: "./src/reader.html", to: "reader.html" },
          { from: "./src/user.html", to: "reader.html" },
      ])
    ],
    module: {
      rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader' // 处理以.vue结尾的文件
          }
      ]
  },
    devServer: { contentBase: path.join(__dirname, "src"), compress: true,port:8000 },
};