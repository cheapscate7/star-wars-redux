import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const CurvedButton = styled.button`
    display: flex;
    cursor: pointer;
    position: fixed;
    bottom: 0.5em;
    right: 0.5em;
    padding: 1em 1.25em;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 0;
    outline: none;
    transition: background-color 0.3s;
    ${({ theme }) => css`
        background-color: ${rgba(theme.colors.highlight_1, 0.8)};
        color: ${theme.colors.coloured_button_foreground};
        &:hover {
            background-color: ${theme.colors.highlight_1};
        }
    `};
`;

export default CurvedButton;
