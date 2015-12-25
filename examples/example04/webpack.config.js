"use strict";
var path = require("path"),

    webpack = require("webpack"),
    parameter = "tw";

module.exports = {
    cache: true,
    entry: {
        test: "./examples/example04/entry.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.ajs$/,
            loader: "node-async-require-loader?preParser=rt&queryString='?country=" + parameter + "'"
        }]
    },
    plugins: [


    ],
    externals: {

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};