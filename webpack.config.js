const path = require('path')

module.exports = {
  entry: [
    '@babel/polyfill',
    `${path.join(__dirname, 'src')}/index.jsx`,
  ],
  mode: 'production',
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
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.md$/, use: 'null-loader' },
      {
        test: /\.js(x)?/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
        include: [/src/],
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      root: ['React'],
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: ['ReactDOM'],
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
}
