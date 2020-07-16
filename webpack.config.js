var webpack = require('webpack');
const path = require('path')

module.exports = {
    entry: {
        'antlrCalc': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'bundles'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'antlrCalc',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: ['ts-loader'],
            exclude: /node_modules/
        }]
    }
};
