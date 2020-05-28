const withFonts = require('next-fonts');
const TerserPlugin = require('terser-webpack-plugin');
const dev = process.env.NODE_ENV !== 'production';

module.exports = withFonts({
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        };
    },
    env: {},
    minimize: !dev,
    minimizer: [
        new TerserPlugin({
            parallel: true,
        }),
    ],
    webpack(config, options) {
        /**
         * for font loading
         * https://github.com/rohanray/next-fonts-example/blob/master/with-styled-comp/next.config.js
         */
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
