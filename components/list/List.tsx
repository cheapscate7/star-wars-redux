import React from 'react';
import styled, { css } from 'styled-components';

type ListProps = {
    loading: boolean;
};

const List: React.FC<ListProps> = ({ loading, children }) => {
    return <Container>{loading ? 'loading' : children}</Container>;
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
