const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.bundle.js'
    },

    plugins: [
        new HtmlWebPackPlugin({
            //inject: true,
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
            manifest: path.join(__dirname, 'public', 'manifest.json'),
            logo192: path.join(__dirname, 'public', 'logo192.png'),
            inject: 'body'
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/, // archivos .css o .scss
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            /* {
                 test: /\.(png|jpg|gif)$/,
                 loader: 'file-loader',
                 options: {
                     name: 'static/media/[name].[hash:8].[ext]',
                 },
             },*/
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },

        ],
    },
    // EVIROMENT MODE
    mode: process.env.NODE_ENV || 'development',

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    devServer: {
        static: path.resolve(__dirname, "./src"),
        port: 3000,
        open: true,
        hot: true
    },



};