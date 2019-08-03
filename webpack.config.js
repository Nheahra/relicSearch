const path = require('path')
const Dotenv = require('dotenv-webpack')


module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',

  entry: `${path.join(__dirname, 'src')}/index.jsx`,

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js(x)?/,
        include: path.join(__dirname, 'src'),
      },
    ],
  },

  plugins: [ new Dotenv() ],
}
