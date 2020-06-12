const merge = require('webpack-merge');

const CssExtractPlugin = require('mini-css-extract-plugin');
const CssExtractLoader = CssExtractPlugin.loader;

const DotenvPlugin = require('dotenv-webpack');

const common = require('../webpack.config');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    CssExtractLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    CssExtractLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new DotenvPlugin(),
    ],
});
