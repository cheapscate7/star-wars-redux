import React from 'react';
import styled, { css } from 'styled-components';

type ListMainProps = {
    loading: boolean;
};

const ListMain: React.FC<ListMainProps> = ({ loading, children }) => {
    return <Container>{loading ? 'loading' : children}</Container>;
};

export default ListMain;

const Container = styled.ul`
    list-style-type: none;

    ${({ theme }) => css`
        font-family: ${theme.fonts[1] || theme.fonts[0]};
    `};
`;
