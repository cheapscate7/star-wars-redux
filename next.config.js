const withFonts = require('next-fonts');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withFonts({
        exportPathMap: function () {
            return {
                '/': { page: '/' },
            };
        },
        env: {
        },
        webpack(config, options) {
            return config;
        },
    }
);
