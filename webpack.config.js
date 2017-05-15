const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
  context: path.resolve('./src'),
  entry: {
    vanilla: './vanilla.ts',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: ['node_modules'],
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve('./src'), 'node_modules'],
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true,
        },
      },
    }),
  ],
}

module.exports = config
