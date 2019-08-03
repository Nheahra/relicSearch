module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/preset-env', {useBuiltIns: 'entry'}],
            ['@babel/preset-react', {development: process.env.NODE_ENV !== 'production'}]
        ]
    };
};
