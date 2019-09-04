require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    const env = dotenv.config().parsed;

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]); // eslint-disable-line
        return prev;
    }, {});
    envKeys['process.env.NODE_ENV'] = JSON.stringify('production');
    const cssModules = glob.sync(path.resolve(process.cwd(), 'src/components/**/*.scss'));

    return {
        mode: 'production',
        entry: cssModules,
        output: {
            path: path.join(__dirname, 'src', 'static', 'css'),
            filename: 'temp.js'
        },
        resolve: {
            modules: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')]
        },
        module: {
            rules: [
                {
                    test: /\.[s]css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[hash:base64:5]'
                                },
                                sourceMap: false,
                                // camelCase: true,
                            }
                        },
                        { 
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'src', 'static', 'css')],
                cleanAfterEveryBuildPatterns: [path.join(__dirname, 'src', 'static', 'css', 'temp.js')]
            }),
            new UglifyJSPlugin(),
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            }),
            new webpack.DefinePlugin(envKeys)
        ],
        devServer: {
            contentBase: 'src/static/',
            hot: true,
            historyApiFallback: {
                index: '/index-static.html'
            }
        }
    };
};
