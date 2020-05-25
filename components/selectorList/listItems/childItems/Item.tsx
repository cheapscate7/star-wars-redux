import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const Item = styled.li`
    padding: 0.5em;
    transition: 0.2s ease;
    ${({ theme }) => css`
        border: 1px solid ${rgba(theme.colors.highlight_1, 0.4)};

        &.active {
            border-right: 0.25em double ${theme.colors.foreground};
            border-left: 0.25em double ${theme.colors.foreground};
        }
         {
            /*This gives the box the bold corners*/
        }
        background: linear-gradient(
                    to right,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 0,
            linear-gradient(
                    to right,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 100%,
            linear-gradient(
                    to left,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 0,
            linear-gradient(
                    to left,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 100%,
            linear-gradient(
                    to bottom,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 0,
            linear-gradient(
                    to bottom,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 0,
            linear-gradient(
                    to top,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 100%,
            linear-gradient(
                    to top,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 100%;
        background-repeat: no-repeat;
        background-size: 10px 10px;
        background-color: ${rgba(theme.colors.highlight_1, 0.02)};
        box-shadow: 0 0 7px ${rgba(theme.colors.highlight_1, 0.2)};
        button {
            color: ${theme.colors.highlight_1};
            font-family: ${theme.fonts[1] || theme.fonts[0]};
            font-size: ${theme.fontSizes.small};
            width: 100%;
            cursor: pointer;
            background-color: transparent;
            border: 0;
            outline: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    `};

    &:hover {
        padding: 0.7em;
    }

    &:first-child {
        margin-bottom: 0.2em;
    }
    &:last-child {
        margin-top: 0.2em;
    }
    &:not(:first-child):not(:last-child) {
        margin: 0.2em auto;
    }
`;

export default Item;
