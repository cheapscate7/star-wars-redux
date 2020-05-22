import styled, { css } from 'styled-components';
import React from 'react';
import { rgba } from 'polished';

/**
 * A breadcrumb for displaying selected Film | Species | Planet
 * this breadcrumb is filled with the highlight_1 colour
 * @param children  pass headers containing the information in the breadcrumb and the placement of dividers eg <span>Film</span> | <span>Planet</span>
 * @constructor
 */
const BreadCrumb: React.FC = ({ children }) => {
    return <BreadCrumbContainer>{children}</BreadCrumbContainer>;
};

const BreadCrumbContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 1em 1.5em;
    ${({ theme }) => css`
        background-color: ${rgba(theme.colors.highlight_1, 0.8)};
        color: ${theme.colors.background};
        font-family: ${theme.fonts[2] || theme.fonts[0]};
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
