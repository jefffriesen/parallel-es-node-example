const path = require('path')
const webpack = require('webpack')
const Config = require('webpack-config').Config
const ParallelEsPlugin = require('parallel-es-webpack-plugin')

module.exports = new Config().merge({
  entry: {
    vanilla: './src/vanilla.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: path.resolve('./src/transpiled'),
        loader: 'babel-loader!awesome-typescript-loader',
      },
      {
        test: /\.ts$/,
        include: path.resolve('./src/transpiled'),
        loader: `babel-loader?${JSON.stringify({
          plugins: ['parallel-es'],
        })}!awesome-typescript-loader`,
      },
      {
        test: /parallel.*\.js/,
        include: path.resolve(require.resolve('parallel-es'), '../'),
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    modules: [path.join(__dirname, '../node_modules')],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    new ParallelEsPlugin({
      babelOptions: {
        presets: [['es2015', {modules: false}]],
      },
    }),
  ],
})

// // const webpack = require('webpack')
// const path = require('path')
// const nodeExternals = require('webpack-node-externals')
// const ParallelEsPlugin = require('parallel-es-webpack-plugin')
// const root = require('app-root-path').path
//
// const config = {
//   // context: path.resolve('./src'),
//   entry: {
//     vanilla: `${root}/src/vanilla.ts`,
//     parallel: `${root}/src/parallel-example.ts`,
//   },
//   output: {
//     path: path.resolve('./dist'),
//     filename: '[name].js',
//     libraryTarget: 'commonjs2',
//   },
//   devtool: 'source-map',
//   target: 'node',
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         // exclude: ['node_modules'],
//         use: {
//           loader: 'ts-loader',
//           options: {
//             plugins: ['parallel-es'],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     modules: [path.join(__dirname, '../node_modules')],
//   },
//   externals: [nodeExternals()],
//   plugins: [new ParallelEsPlugin()],
// }
//
// module.exports = config
