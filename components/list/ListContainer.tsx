import styled, { css } from 'styled-components';
import React from 'react';
import BreadCrumb from './BreadCrumb';
import List from './ListMain';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FilmItem from './listItems/FilmItem';
import withSearch from '../../lib/withSearch';

const ALL_FILMS = gql`
    query {
        allFilms {
            id
            title
        }
    }
`;

interface IAll_films_data {
    allFilms: IFilm[];
}

const ListContainer: React.FC = ({ children }) => {
    const { loading, error, data } = useQuery<IAll_films_data>(ALL_FILMS);
    const { searchState, searchDispatch } = withSearch();
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
                <List loading={loading}>
                    {data &&
                        data.allFilms.map((film, index) => (
                            <FilmItem
                                key={`${film.title}_${index}`}
                                film={film}
                            />
                        ))}
                </List>
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
