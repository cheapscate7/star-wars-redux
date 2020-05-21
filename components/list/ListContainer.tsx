import styled, { css } from 'styled-components';
import React from 'react';
import BreadCrumb from './BreadCrumb';

const ListContainer: React.FC = ({ children }) => {
    return (
        <Container>
            <BreadCrumb>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
            </BreadCrumb>
            <ListGroups></ListGroups>
        </Container>
    );
};

export default ListContainer;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em auto;
`;

const ListGroups = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    width: 100%;
`;
