var webpack = require('webpack');

module.exports = {
    entry: "./Calculator",
    output: {
        filename: "./dist/bundle.js",
        library: ["antlrCalc"] // Global variable name
    },
    devtool: "source-map",
    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts']
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    }
};