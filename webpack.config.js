const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets'
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
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {from: path.resolve(__dirname, 'src/assets') , to:'public'}
        //     ]
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                },
                // use: [
                //     {
                //         loader: ImageMinimizerPlugin.loader,
                //         options: {
                //             severityError: "warning", // Ignore errors on corrupted images
                //             minimizerOptions: {
                //               plugins: ["optipng"],
                //             },
                //         }
                //     }
                // ]
            },
        ]
    }
}