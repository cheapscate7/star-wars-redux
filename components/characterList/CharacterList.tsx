import styled, { css } from 'styled-components';
import React from 'react';
import LoadingElement from '../LoadingElement';

const CharacterList: React.FC<IListProps> = ({ title, loading, children }) => {
    return (
        <Container>
            {title && <h2>{title}</h2>}
            <List>
                <LoadingElement loading={loading}>{children}</LoadingElement>
            </List>
        </Container>
    );
};

export default CharacterList;

const Container = styled.section`
    padding: 0 1em;
    ${({ theme }) => css`
        font-family: ${theme.fonts[2] || theme.fonts[0]};
    `};
`;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 0.5em;
    padding: 1em 2em;
`;
