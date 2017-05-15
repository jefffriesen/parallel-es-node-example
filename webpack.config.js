// const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const ParallelEsPlugin = require('parallel-es-webpack-plugin')

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
        // exclude: ['node_modules'],
        use: {
          loader: 'ts-loader',
          options: {
            plugins: ['parallel-es'],
          },
        },
      },
    ],
  },
  // resolve: {
  //   extensions: ['.ts', '.js'],
  //   modules: [path.resolve('./src'), 'node_modules'],
  // },
  externals: [nodeExternals()],
  plugins: [new ParallelEsPlugin()],
}

module.exports = config
