import styled, { css } from 'styled-components';

/**
 * container for the individual character
 */
const ListItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 0.5em 1em;
    border-radius: 3px;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
    `};
    > div {
        width: 100%;
        ${({ theme }) => css`
            border-bottom: 1px solid ${theme.colors.highlight_1_contrast};
            font-family: ${theme.fonts[2] || theme.fonts[0]};
        `};
    }
`;

export default ListItem;
