//定义了一些文件夹的路径
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ImageminPlugin = require('imagemin-webpack-plugin')

module.exports = {
    // mode: 'development',
    mode: 'production',
    output: {
        // filename: 'sub.min.js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'static/js'
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
            // filename: '../../index.html',
            template: 'src/assets/index.html',
        }),
    ],

};