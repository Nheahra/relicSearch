module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: module,
    ecmaFeatures: {
      jxs: true,
    },
  },
  plugins: [
    react,
    '@typescript-eslint',
  ],
  rules: {
    complexity: ['error', 20],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', { code: 120 }],
    'max-lines': ['error', 300],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-underscore-dangle': 'off',
    'newline-before-return': 'error',
    'react/forbid-prop-types': [1, { forbid: ['any', 'array', 'object'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-sort-props': [2, {
      ignoreCase: false,
      callbacksLast: false,
      shorthandFirst: false
    }],
    semi: ['error', 'never'],
    'template-curly-spacing': 'off',
  }
}
