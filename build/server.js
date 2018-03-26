const path = require("path");
const express = require("express");
const webpack = require("webpack");

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-Hot-middleware");
const webpackConfig = require('./webpack.config');

const ROOT_PATH = path.resolve(__dirname, '../dist');
const app = express();
const PORT = 9090; // 设置启动端口
const complier = webpack(webpackConfig);


var devMiddleware = webpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true //向控制台显示任何内容
})

var hotMiddleware = webpackHotMiddleware(complier, {
    log: false,
    heartbeat: 2000,
})
app.use(devMiddleware);

app.use(hotMiddleware);


// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(express.static(ROOT_PATH));

app.listen(PORT, function () {
    console.log("成功启动：localhost:" + PORT)
})