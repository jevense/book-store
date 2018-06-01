//定义了一些文件夹的路径
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // mode: 'production',
    // entry: ["babel-polyfill", "./src/index"],
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'static/js'
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(eot|woff)$/,
                use: {
                    loader: "file-loader"
                }
            }, {
                test: /\.(htm)$/,
                use: {
                    loader: 'html-loader',
                }
            }, {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            }, {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ],
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            // filename: '../../index.html',
            template: 'src/assets/index.html',
        }),
    ],

};