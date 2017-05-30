const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// ParallelEsPlugin doesn't work in a node environment yet
// const ParallelEsPlugin = require('parallel-es-webpack-plugin')

module.exports = {
  entry: {
    'parallel-range': './src/parallel-range.ts',
    'parallel-from': './src/parallel-from.ts',
    'parallel-from-environment': './src/parallel-from-environment.ts',
    'parallel-times': './src/parallel-times.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  target: 'node',
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        // query: {
        //   plugins: ['parallel-es'],
        // },
      },
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.ts', '.js'],
  },
  plugins: [
    // node-slave.parallel.js needs to be copied into the dist folder
    // See https://github.com/MichaReiser/parallel.es/issues/103#issuecomment-301775103
    new CopyWebpackPlugin([
      {from: './node_modules/parallel-es/dist/node-slave.parallel.js'},
      {from: './node_modules/parallel-es/dist/node-slave.parallel.js.map'},
    ]),
    // new ParallelEsPlugin(),
  ],
}
