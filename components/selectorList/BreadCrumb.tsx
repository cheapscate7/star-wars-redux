import styled, { css } from 'styled-components';
import React from 'react';
import { rgba } from 'polished';

interface IBreadCrumbProps {
    items: string[];
}

/**
 * A breadcrumb for displaying selected Film | Species | Planet
 * this breadcrumb is filled with the highlight_1 colour
 * @param children  pass headers containing the information in the breadcrumb and the placement of dividers eg <span>Film</span> | <span>Planet</span>
 * @constructor
 */
const BreadCrumb: React.FC<IBreadCrumbProps> = ({ items }) => {
    return (
        <BreadCrumbContainer show={items.length > 0}>
            {items.map(
                (item, index) =>
                    item && (
                        <React.Fragment key={`${item}_${index}`}>
                            <BreadCrumbItem>{item}</BreadCrumbItem>
                            {index !== items.length - 1 && <Divider>|</Divider>}
                        </React.Fragment>
                    )
            )}
        </BreadCrumbContainer>
    );
};

const BreadCrumbContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    min-height: 1em;
    width: 0;
    transition: width 0.3s linear;
    ${({ theme }) => css`
        background-color: ${rgba(theme.colors.highlight_1, 0.8)};
        color: ${theme.colors.background};
        font-family: ${theme.fonts[2] || theme.fonts[0]};
    `};
    ${({ show }) =>
        show &&
        css`
            padding: 1em 1.5em;
            width: auto;
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

const Divider = styled.span`
    transition: all 0.3s linear;
    margin: auto 0.25em;
    &:only-child,
    &:last-child {
        display: none;
    }
`;

const BreadCrumbItem = styled.div`
    &:first-child:not(:only-child) {
        margin-right: 0.5em;
    }
    &:only-child {
        margin: 0;
    }
    &:last-child:not(:only-child) {
        margin-left: 0.5em;
    }
    &:not(:first-child):not(:last-child) {
        margin: auto 0.25em;
    }
`;
