module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
  ],
  plugins: [
    '@emotion',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
    [
      'transform-imports',
      {
        '@mui/material': {
          transform: '@mui/material/${member}',
          preventFullImport: true,
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
      }
    ],
  ],
}