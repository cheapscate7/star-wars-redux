import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import LoadingElement from '../LoadingElement';

/**
 * for displaying a collection of list nodes eg: <FilmItem>
 * @param title     type string     an optional title for the list
 * @param loading   type:boolean    are the list's children loading
 * @param children
 * @constructor
 */
const SelectorList: React.FC<IListProps> = ({ title, loading, children }) => {
    const [hide, setHide] = useState(false);
    const hideAction = () => {
        setHide(!hide);
    };
    return (
        <Container>
            <div>
                {title && <SectionTitle>{title}</SectionTitle>}
                <HideButton onClick={hideAction}>
                    {!hide ? 'hide' : 'show'}
                </HideButton>
            </div>
            <LoadingElement loading={loading}>
                {!hide && <List>{children}</List>}
            </LoadingElement>
        </Container>
    );
};

export default SelectorList;

/**
 * container for the title, hide button, and list
 */
const Container = styled.section`
    padding: 0 1em;
    ${({ theme }) => css`
        font-family: ${theme.fonts[2] || theme.fonts[0]};
        color: ${theme.colors.foreground};
    `};
`;

/**
 * renders a list of selectors eg <FilmItem>
 */
const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    transition: width 1s ease;
    ${({ theme }) => css`
        font-family: ${theme.fonts[1] || theme.fonts[0]};
    `};
`;

const SectionTitle = styled.h2`
    display: inline-block;
`;

const HideButton = styled.button`
    cursor: pointer;
    background: transparent;
    padding: 1em;
    border: 0;
    outline: none;
    ${({ theme }) => css`
        color: ${theme.colors.foreground};
    `};
    &:hover {
        text-decoration: underline;
    }
    @media (min-width: 426px) {
        display: none;
    }
`;
