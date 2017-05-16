const path = require('path')
const ParallelEsPlugin = require('parallel-es-webpack-plugin')

module.exports = {
  entry: {
    vanilla: './src/vanilla.ts',
    'parallel-range': './src/parallel-range.ts',
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
        query: {
          plugins: ['parallel-es'],
        },
      },
    ],
  },
  plugins: [new ParallelEsPlugin()],
}
