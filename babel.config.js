module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
    'autobind-class-methods',
    'transform-class-properties',
    [
      'transform-imports',
      {
        '@material-ui/core': {
          transform: '@material-ui/core/${member}',
          preventFullImport: true,
        },
        '@material-ui/lab': {
          transform: '@material-ui/lab/${member}',
          preventFullImport: true,
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
      }
    ],
    'react-hot-loader/babel',
  ],
}
