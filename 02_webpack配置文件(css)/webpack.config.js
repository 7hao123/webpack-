const path = require('path');
const { default: postcss } = require('postcss');
module.exports = {
    entry: './src/index.js',
    output: {
        // 必须是绝对路径
        path: path.resolve(__dirname) + '/build',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [{loader: 'style-loader'，options: {sourceMap: true}}, 'css-loader']
                use: ['style-loader',{
                    loader: 'css-loader',
                    options: {
                        // 解决css中引入其他css的问题
                        importLoaders: 1,
                        sourceMap: true
                    }
                },'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    },

}