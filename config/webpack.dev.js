/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

const path = require("path");
const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        "venus-form": "./src/main.dev.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(process.cwd(), "dev"),
        publicPath: "/"
    },
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
        contentBase: "dist",
        overlay: true,
        stats: {
            colors: true
        }
    },
    // devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }],
                exclude: /(node_modules|bower_components)/
            },

            // {
            //     test: /tinymce[\\/]skins[\\/]/,
            //     loader: 'file?name=[path][name].[ext]&context=node_modules/tinymce'
            // },

            {
                test: /\.(jpg|jpeg|gif|png|webpm|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/img/[name].[ext]"
                        }
                    }
                ]
            },

            {
                test: /.(woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/webfonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { importLoaders: 2, sourceMap: true },
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         config: {
                    //             path: __dirname + '/postcss.config.js'
                    //         }
                    //     }
                    // },
                    'sass-loader'
                ],
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    // resolveLoader: {
    //     moduleExtensions: ["-loader"]
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HTMLWebpackPlugin({
            title: "O2System Venus Form UI",
            template: "./src/index.html"
        }), // Generates default index.html
    ]
};