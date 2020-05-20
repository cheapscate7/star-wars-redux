const LightTheme: Theme = {
    colors: {
        foreground: "black",
        background: "white",
        highlight_1: "#1febfd",
        highlight_2: "#fd311f",
        highlight_1_contrast: "#ebfd1f",
        highlight_2_contrast: "#311ffd"
    },
    fontWeights: {
        light: 300,
        normal: 400,
        heavy: 500,
        bold: 'bold',
    },
    fontSizes: {
        tiny: "0.5rem",
        small: "1rem",
        medium: "2rem",
        large: "3rem",
        huge: "5rem"
    },
    shadows: [
        'inset 0 0 0 1px #ddd, 0 0 10px 0 rgba(0,0,0,.1)',
        '0px 0px 6px 0px rgba(0,0,0,0.75)',
    ],
    fonts: [
        '"Roboto", -apple-system, sans-serif',
    ],
};

export default LightTheme;