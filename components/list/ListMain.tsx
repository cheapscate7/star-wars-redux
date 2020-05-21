import React from 'react';
import styled, { css } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { DocumentNode } from 'graphql';

type ListMainProps = {
    loading: boolean;
};

const ListMain: React.FC<ListMainProps> = ({ loading, children }) => {
    return <Container>{loading ? 'loading' : children}</Container>;
};

export default ListMain;

const Container = styled.ul`
    list-style-type: none;
`;
