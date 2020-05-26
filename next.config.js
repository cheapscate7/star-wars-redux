const withFonts = require('next-fonts');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withFonts({
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        };
    },
    env: {},
    webpack(config, options) {
        if (options.isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function'
                    ? []
                    : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }
        return config;
    },
});
