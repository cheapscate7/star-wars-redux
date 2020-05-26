import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/**
FONTS
 */
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
      Iceland
      this is another "space-y" font that looks like some of the alien writing in the movies
     */
    @font-face {
        font-family: 'Iceland';
        font-display: swap;
        src: url('/fonts/Iceland-Regular.ttf');
    }
    /**
      Montserrat
     */
    @font-face {
        font-family: 'Montserrat';
        font-display: swap;
        src: url('/fonts/Montserrat-Regular.ttf');
    }
/**
STYLES
 */
    :root {
      font-size: 12pt;
      @media (max-width: 425px) {
          font-size: 10pt;
        }
    
      
    }
    ::selection {
      ${({ theme }) => css`
          background: ${theme.colors.highlight_1_contrast};
      `};; /* WebKit/Blink Browsers */
    }
    
    body {
        border: 0;
        margin: 0;
        transition: background-color 0.2s ease-in-out;
        transition-delay: 0.2s;
        ${({ theme }) => css`
            background-color: ${theme.colors.background};
        `};
    }
    
    h1 {
      margin: 0;
      ${({ theme }) => css`
          font-size: ${theme.fontSizes.large};
      `};
    }
`;

export default GlobalStyle;
