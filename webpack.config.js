const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      { test: /\.md$/, use: 'null-loader' },
      {
        include: [/src/],
        exclude: /(node_modules|bower_components)/,
        test: /\.js(x)?/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
          }
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
    ],
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  },
};