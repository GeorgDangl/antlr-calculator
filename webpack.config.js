const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

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
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: ['ts-loader'],
            exclude: /node_modules/
        }]
    },
    optimization: {
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          }),
        ],
      },
      performance: {
        maxEntrypointSize: 512000,
          maxAssetSize: 512000
      }
};
