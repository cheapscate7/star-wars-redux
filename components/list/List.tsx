import React from 'react';
import styled, { css } from 'styled-components';
import LoadingElement from '../LoadingElement';

type ListProps = {
    loading?: boolean;
};

/**
 * for displaying a collection of list nodes eg: <FilmItem>
 * @param loading   type:boolean    are the list's children loading
 * @param children
 * @constructor
 */
const List: React.FC<ListProps> = ({ loading, children }) => {
    return (
        <Container>
            <LoadingElement loading={loading}>{children}</LoadingElement>
        </Container>
    );
};

export default List;

const Container = styled.ul`
    list-style-type: none;
    padding: 1em;
    transition: width 1s ease;
    ${({ theme }) => css`
        font-family: ${theme.fonts[1] || theme.fonts[0]};
        border-bottom: 1px solid ${theme.colors.highlight_1_contrast};
    `};
`;
