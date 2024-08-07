const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    'antlrCalc': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'demo', 'dist'),
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
        loader: 'ts-loader',
        exclude: /node_modules/
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_DEBUG': false,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
    ],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
