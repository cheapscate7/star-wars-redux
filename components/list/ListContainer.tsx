import styled from 'styled-components';
import React from 'react';
import BreadCrumb from './BreadCrumb';
import List from './List';
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

const FILM_CHILDREN = gql`
    query($id: ID) {
        Film(id: $id) {
            title
            species {
                id
                name
            }
            planets {
                id
                name
            }
        }
    }
`;

const ListContainer: React.FC = ({ children }) => {
    const { loading, error, data } = useQuery<IAll_films_data>(ALL_FILMS);
    const { searchState, searchDispatch } = withSearch();
    const querydata = useQuery<IFilmChildrenData>(FILM_CHILDREN, {
        variables: {
            id: searchState.currentFilmId,
        },
        skip: !searchState.currentFilmId,
    });

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
                                clickAction={searchDispatch}
                            />
                        ))}
                </List>
                {searchState.currentFilmId && (
                    <>
                        <List loading={querydata.loading}>
                            {querydata.data &&
                                querydata.data.Film.species.map(
                                    (species, index) => (
                                        <li
                                            key={`species_${index}_${species.name}`}
                                        >
                                            {species.name}
                                        </li>
                                    )
                                )}
                        </List>
                    </>
                )}
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 100%;
`;

const Divider = styled.span`
    &:last-child {
        display: none;
    }
`;
