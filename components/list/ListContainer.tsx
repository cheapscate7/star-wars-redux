import styled, { css } from 'styled-components';
import React from 'react';

const ListContainer: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default ListContainer;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;
