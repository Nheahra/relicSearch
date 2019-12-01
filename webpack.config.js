const path = require('path')
const Dotenv = require('dotenv-webpack')


module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',

  entry: './src/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
    extensions: [ '.js', '.jsx', 'json' ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  plugins: [ new Dotenv() ],
}
