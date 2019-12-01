/* eslint-disable no-template-curly-in-string */
module.exports = api => {
  api.cache(true)

  const presets = [
    [ '@babel/preset-env', { targets: { node: 'current' }, useBuiltIns: 'entry' }],
    [ '@babel/preset-react', { development: process.env.NODE_ENV !== 'production' }],
  ]

  const plugins = [
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          transform: '@material-ui/core/${member}',
          preventFullImport: true,
        },
        '@material-ui/icons': {
          transform: '@material-ui/icons/${member}',
          preventFullImport: true,
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
