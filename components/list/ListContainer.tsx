import styled, { css } from 'styled-components';
import React from 'react';
import BreadCrumb from './BreadCrumb';
import ListMain from './ListMain';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ALL_FILMS = gql`
    query {
        allFilms {
            id
            title
        }
    }
`;

const ListContainer: React.FC = ({ children }) => {
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
        ALL_FILMS
    );
    return (
        <Container>
            <BreadCrumb>
                <div>Hello</div>
                <Divider>|</Divider>
                <div>Hello</div>
                <Divider>|</Divider>
                <div>Hello</div>
            </BreadCrumb>

            <ListGroups>
                <ListMain loading={loading}>{data && <FilmItem />}</ListMain>
            </ListGroups>
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

const Divider = styled.span``;
