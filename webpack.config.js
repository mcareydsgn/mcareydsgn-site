const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase:'./dist',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Mattthew Carey Front-End Developer',
            filename: 'index.html',
            inject: 'head',
            minify: true
        })
    ]
}