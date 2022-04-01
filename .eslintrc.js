module.exports = {
    env: {
        browser: true,
        node: true,
        es2022: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    plugins: ['react', 'jest'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
        'import/resolver': {
            node: {
                path: ['src'],
                extensions: ['.js', '.jxs'],
            },
        },
    },
    rules: {
    }
};
