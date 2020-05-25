import React from 'react';
import styled, { css } from 'styled-components';
import LoadingElement from '../LoadingElement';

/**
 * for displaying a collection of list nodes eg: <FilmItem>
 * @param loading   type:boolean    are the list's children loading
 * @param children
 * @constructor
 */
const SelectorList: React.FC<IListProps> = ({ title, loading, children }) => {
    return (
        <Container>
            {title && <h2>{title}</h2>}
            <LoadingElement loading={loading}>
                <List>{children}</List>
            </LoadingElement>
        </Container>
    );
};

export default SelectorList;

const Container = styled.section`
    padding: 0 1em;
    ${({ theme }) => css`
        font-family: ${theme.fonts[2] || theme.fonts[0]};
    `};
`;

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    transition: width 1s ease;
    ${({ theme }) => css`
        font-family: ${theme.fonts[1] || theme.fonts[0]};
    `};
`;
