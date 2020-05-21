import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /**
      Star wars Distant Galaxy
      this is the fancy Star wars font
     */
    @font-face {
        font-family: 'SW-Galaxy';
        font-display: swap;
        src: url('/fonts/SW-Distant-Galaxy.ttf');
    }
    /**
      Montserrat
     */
    @font-face {
        font-family: 'Montserrat';
        font-display: swap;
        src: url('/fonts/Montserrat-Regular.ttf');
    }
    
    body {
        border: 0;
        margin: 0;
        ${({ theme }) => css`
            background-color: 1px solid ${theme.colors.background};
        `};
    }
    
    h1{
      margin: 0;
      ${({ theme }) => css`
          font-size: ${theme.fontSizes.large};
      `};
    }
`;

export default GlobalStyle;
