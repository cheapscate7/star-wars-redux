import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import LoadingElement from '../LoadingElement';

const CharacterList: React.FC<IListProps> = ({ loading, children }) => {
    return (
        <List>
            <LoadingElement loading={loading}>{children}</LoadingElement>
        </List>
    );
};

export default CharacterList;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
`;
