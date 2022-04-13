module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    plugins: [
        'import',
        'react',
        'jest',
        'react-hooks',
        'jsx-a11y',
    ],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    rules: {
        'no-unused-vars': ['warn'],
    },
};
