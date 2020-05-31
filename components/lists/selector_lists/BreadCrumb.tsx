import styled, { css } from 'styled-components';
import React from 'react';
import { rgba } from 'polished';
import {
    searchActions,
    useSearchDispatch,
    useSearchState,
} from '../../../lib/withSearch';
import removeUndefined from '../../../lib/helpers/arrays';

/**
 * A breadcrumb for displaying selected Film | Species | Planet etc
 * this breadcrumb is filled with the highlight_1 colour
 * @constructor
 */
const BreadCrumb: React.FC = () => {
    const searchState = useSearchState(); //selected Film, Species, Planet
    const searchDispatch = useSearchDispatch();
    const { combinedQueryParams } = searchState;

    const items = removeUndefined([
        combinedQueryParams.film.title,
        combinedQueryParams.species.name,
        combinedQueryParams.planet.name,
    ]);

    const handleClear = () => {
        searchDispatch(searchActions.reset());
    };
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
            {items.length > 0 && (
                <ClearButton
                    aria-label={'Clear all selections'}
                    onClick={handleClear}
                >
                    x
                </ClearButton>
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
    transition: background-color 0.2s ease-in-out;
    ${({ theme }) => css`
        background-color: ${rgba(theme.colors.highlight_1, 0.8)};
        color: ${theme.colors.coloured_button_foreground};
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

/**
 * Separator for each item of the breadcrumb
 */
const Divider = styled.span`
    transition: all 0.3s linear;
    margin: auto 0.25em;
    ${({ theme }) => css`
        color: ${theme.colors.coloured_button_foreground};
    `};
    &:only-child,
    &:last-child {
        display: none;
    }
`;

const BreadCrumbItem = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.coloured_button_foreground};
    `};
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

const ClearButton = styled.button`
    border: 0;
    cursor: pointer;
    padding: 0.2em 0.7em;
    border-radius: 2px;
    transition: 0.2s ease-in-out;
    ${({ theme }) => css`
        background-color: ${theme.colors.highlight_1};
        color: ${theme.colors.coloured_button_foreground};
        font-weight: ${theme.fontWeights.bold};
        font-size: ${theme.fontSizes.small};
        &:hover {
            background-color: ${rgba(theme.colors.highlight_1, 0.6)};
        }
    `};
`;
