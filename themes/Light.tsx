const LightTheme: Theme = {
    colors: {
        foreground: 'black',
        background: 'white',
        highlight_1: '#001cd5',
        highlight_1_contrast: '#d59900',
    },
    fontWeights: {
        light: 300,
        normal: 400,
        heavy: 500,
        bold: 'bold',
    },
    fontSizes: {
        tiny: '0.5rem',
        small: '1rem',
        medium: '2rem',
        large: '3rem',
        huge: '5rem',
    },
    shadows: [
        'inset 0 0 0 1px #ddd, 0 0 10px 0 rgba(0,0,0,.1)',
        '0px 0px 6px 0px rgba(0,0,0,0.75)',
    ],
    fonts: [
        '"SW-Galaxy", -apple-system, sans-serif',
        '"Montserrat", -apple-system, sans-serif',
    ],
};

export default LightTheme;
