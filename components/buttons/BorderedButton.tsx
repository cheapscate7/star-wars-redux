import styled, { css } from 'styled-components';

const BorderedButton = styled.button`
    cursor: pointer;
    padding: 1em 1.5em;
    outline: none;
    transition: 0.2s ease-in-out;
    ${({ theme }) => css`
        font-family: ${theme.fonts[1] || theme.fonts[0]};
        font-size: ${theme.fontSizes.small};
        color: ${theme.colors.foreground};
        border: 1px solid ${theme.colors.foreground};
        background-color: ${theme.colors.background};
        &:focus,
        &:hover {
            border: 1px solid ${theme.colors.highlight_1};
        }
    `};
`;

export default BorderedButton;
