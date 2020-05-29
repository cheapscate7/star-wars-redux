import styled, { css } from 'styled-components';

/**
 * holds the List as well as an optional title
 */
const Container = styled.section`
    padding: 0 1em;
    ${({ theme }) => css`
        font-family: ${theme.fonts[2] || theme.fonts[0]};
        color: ${theme.colors.foreground};
    `};
`;

export default Container;
