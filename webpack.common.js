const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'styles-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['asset/resource'],
            },
        ],
    },
    output: {
        clean: true,
    }
}