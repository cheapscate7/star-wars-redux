import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SW-Galaxy';
        font-display: swap;
        src: url('/fonts/SW-Distant-Galaxy.ttf');
    }
    body {
        border: 0;
        margin: 0;
        ${({theme}) => css`
            background-color: 1px solid ${theme.colors.background};
        `};
    }
`;

export default GlobalStyle;