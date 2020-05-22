import styled from 'styled-components';
import React from 'react';
import BreadCrumb from './BreadCrumb';
import List from './List';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FilmItem from './listItems/FilmItem';
import withSearch from '../../lib/withSearch';
import SpeciesItem from './listItems/SpeciesItem';
import LoadingElement from '../LoadingElement';

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

/**
 * A grid for placing <List> items in based on CSS grids
 * one List acts as a master, selecting a value from the master list causes all child lists to be render
 * also has a breadcrumb
 * @constructor
 */
const ListContainer: React.FC = () => {
    const masterQuery = useQuery<IAll_films_data>(ALL_FILMS);
    const { searchState, searchDispatch } = withSearch();
    const childQuery = useQuery<IFilmChildrenData>(FILM_CHILDREN, {
        variables: {
            id: searchState.currentFilmId,
        },
        skip: !searchState.currentFilmId,
    });

    return (
        <Container>
            <BreadCrumb>
                <div>{childQuery.data && childQuery.data.Film.title}</div>
                <Divider>|</Divider>
                <div>Hello</div>
                <Divider>|</Divider>
                <div>Hello</div>
            </BreadCrumb>

            <ListGroups>
                <List loading={masterQuery.loading}>
                    {masterQuery.data &&
                        masterQuery.data.allFilms.map((film, index) => (
                            <FilmItem
                                key={`${film.title}_${index}`}
                                film={film}
                                selected={searchState.currentFilmId === film.id}
                                clickAction={searchDispatch}
                            >
                                <span>{film.title}</span>
                            </FilmItem>
                        ))}
                </List>
                {searchState.currentFilmId && (
                    <LoadingElement loading={childQuery.loading}>
                        <List>
                            {childQuery.data &&
                                childQuery.data.Film.species.map(
                                    (species, index) => (
                                        <SpeciesItem
                                            species={species}
                                            key={`species_${index}_${species.name}`}
                                            selected={false}
                                            clickAction={() => {}}
                                        >
                                            <span>{species.name}</span>
                                        </SpeciesItem>
                                    )
                                )}
                        </List>
                        <List>
                            {childQuery.data &&
                                childQuery.data.Film.planets.map(
                                    (planet, index) => (
                                        <SpeciesItem
                                            species={planet}
                                            key={`species_${index}_${planet.name}`}
                                            selected={false}
                                            clickAction={() => {}}
                                        >
                                            <span>{planet.name}</span>
                                        </SpeciesItem>
                                    )
                                )}
                        </List>
                    </LoadingElement>
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
