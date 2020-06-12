require('dotenv').config();

const { join } = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const VuePlugin = require('vue-loader/lib/plugin');

const {
    SRC_PATH,
    RES_PATH,

    SRC_SERVICE_PATH,
    SRC_UTILS_PATH,

    SRC_VUE_COMPONENT_PATH,
    SRC_VUE_VIEW_PATH,

    DIST_PATH,
} = require('./utils/paths');

module.exports = {
    entry: join(SRC_PATH, 'main.js'),
    output: {
        path: DIST_PATH,
        filename: 'main.[hash].js',
    },

    resolve: {
        alias: {
            '@src': SRC_PATH,
            '@res': RES_PATH,

            '@service': SRC_SERVICE_PATH,
            '@util': SRC_UTILS_PATH,

            '@vue-component': SRC_VUE_COMPONENT_PATH,
            '@vue-view': SRC_VUE_VIEW_PATH,
        },

        extensions: ['.vue', '.js'],
    },

    stats: {
        children: false,
        modules: false,
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader'],
                    },
                    {
                        use: ['pug-loader'],
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|ttf|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?[hash]',
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new VuePlugin(),
        new HtmlPlugin({
            template: join(RES_PATH, 'index.pug'),
            inject: false,

            env: process.env || {},
        }),
        new CssExtractPlugin({
            filename: 'main.[hash].css',
        }),
    ],
};
