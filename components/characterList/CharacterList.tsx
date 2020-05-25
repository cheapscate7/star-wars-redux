import styled from 'styled-components';
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
    grid-template-columns: repeat(auto-fit, 200px);
    width: 100%;
    padding: 1em 2em;
`;
