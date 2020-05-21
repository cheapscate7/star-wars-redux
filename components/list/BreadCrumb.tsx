import styled, { css } from 'styled-components';
import React from 'react';

const BreadCrumb: React.FC = ({ children }) => {
    return <BreadCrumbContainer>{children}</BreadCrumbContainer>;
};

const BreadCrumbContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 1em 1.5em;
    ${({ theme }) => css`
        background-color: ${theme.colors.highlight_1};
        color: ${theme.colors.background};
        font-family: ${theme.fonts[1] || theme.fonts[0]};
    `};
    > *:first-child {
        margin-right: 0.5em;
    }
    > *:last-child {
        margin-left: 0.5em;
    }
    > *:not(:first-child):not(:last-child) {
        margin: auto 0.25em;
    }
`;

export default BreadCrumb;
