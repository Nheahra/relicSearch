const webpack = require('webpack')
const config = require('./webpack.config')
const chain = require('lodash/chain')

module.exports = chain(config)
  .clone()
  .extend({
    mode: 'development',
    entry: [
      'webpack-hot-middlware/client?path=http://localhost:8080/__webpack_hmr?reload=true',
      'react-hot-loader/patch',
      './src/index.jsx'
    ],
    module: {
      rules: [
        { test: /\.json$/, use: 'json-loader' },
        { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath:'fonts/',
              },
            },
          ],
        },
      ],
    },
    devtool: 'inline-cheap-module-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process-env': {
          NODE_ENV: 'development',
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.IgnorePlugin(/nodent|js-beautify/, /ajv/),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      mainFields: ['main', 'module'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  })