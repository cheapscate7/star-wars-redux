/**
 * DARK THEME
 * tries to prioritise black and dark colours as well as red to thematically represent the dark side
 */
const DarkTheme: Theme = {
    colors: {
        foreground: '#eeeeee',
        background: '#2d2c2c',
        highlight_1: '#c13d3d',
        highlight_1_contrast: '#d59900',
        coloured_button_foreground: '#eeeeee',
    },
    fontWeights: {
        light: 300,
        normal: 400,
        heavy: 500,
        bold: 'bold',
    },
    fontSizes: {
        tiny: '0.5rem',
        small: '1.2rem',
        medium: '2rem',
        large: '3rem',
        huge: '5rem',
    },
    fonts: [
        '"SW-Galaxy", -apple-system, sans-serif',
        '"Iceland", -apple-system, sans-serif',
        '"Montserrat", -apple-system, sans-serif',
    ],
    iconDecor: '/empire.svg',
};

export default DarkTheme;
