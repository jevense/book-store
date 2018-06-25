//定义了一些文件夹的路径
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ImageminPlugin = require('imagemin-webpack-plugin')

module.exports = {
    // mode: 'development',
    // devtool: "source-map",
    mode: 'production',
    // dev: {
    //     proxyTable: {
    //         '/api': {
    //             target: 'http://10.1.5.11:8080/',//设置你调用的接口域名和端口号
    //             changeOrigin: true,     //跨域
    //             pathRewrite: {
    //                 '^/api': '/'          //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
    //             }
    //         }
    //     }
    // },
    output: {
        chunkFilename: '[name].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'initial', // 只对入口文件处理
            cacheGroups: {
                vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /node_modules\//,
                    name: 'page/vendor',
                    priority: 10,
                    enforce: true
                },
                commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
                    test: /common\/|components\//,
                    name: 'page/commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'page/manifest'
        }
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
                exclude: /node_modules/,
                use: ['babel-loader']
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
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '8192',
                        outputPath: 'img',
                        publicPath: 'http://mvw-imed3-mall.oss-cn-beijing.aliyuncs.com/ui/phone/img',
                    }
                }]
            }, {
                test: /\.(eot|woff)$/,
                use: ['file-loader'],
            }, {
                test: /\.(htm)$/,
                use: ['html-loader']
            }, {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            }, {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ],
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            // chunks: [],
            template: 'src/assets/index.html',
        }),
    ],

};
