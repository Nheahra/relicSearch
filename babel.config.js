module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3.0.0',
          shippedProposals: true,
          targets: {
            node: '10.15',
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.NODE_ENV !== 'production'
        },
      ]
    ],
    plugins: [
      'babel-plugin-transform-imports',
    ],
  }
}
