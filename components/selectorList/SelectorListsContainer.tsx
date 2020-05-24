import styled from 'styled-components';
import React from 'react';
import BreadCrumb from './BreadCrumb';
import SelectorList from './SelectorList';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FilmItem from './listItems/FilmItem';
import withSearch from '../../lib/withSearch';
import SpeciesItem from './listItems/SpeciesItem';
import LoadingElement from '../LoadingElement';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';

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
 * A grid for placing <SelectorList> items in based on CSS grids
 * one List acts as a master, selecting a value from the master list causes all child lists to be render
 * also has a breadcrumb
 * @constructor
 */
const SelectorListsContainer: React.FC = ({ children }) => {
    const masterQuery = useQuery<IAll_films_data>(ALL_FILMS);
    const { searchState, searchDispatch } = withSearch();
    const childQuery = useQuery<IFilmChildrenData>(FILM_CHILDREN, {
        variables: {
            id: searchState.currentFilmId,
        },
        skip: !searchState.currentFilmId,
    });

    return (
        <>
            <Container>
                <BreadCrumb>
                    <div>{childQuery.data && childQuery.data.Film.title}</div>
                    <Divider>|</Divider>
                    <div>Hello</div>
                    <Divider>|</Divider>
                    <div>Hello</div>
                </BreadCrumb>

                <ListGroups>
                    <SelectorList loading={masterQuery.loading}>
                        {masterQuery.data &&
                            masterQuery.data.allFilms.map((film, index) => (
                                <FilmItem
                                    key={`${film.title}_${index}`}
                                    film={film}
                                    selected={
                                        searchState.currentFilmId === film.id
                                    }
                                    clickAction={searchDispatch}
                                >
                                    <span>{film.title}</span>
                                </FilmItem>
                            ))}
                    </SelectorList>
                    {searchState.currentFilmId && (
                        <LoadingElement loading={childQuery.loading}>
                            <SelectorList>
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
                            </SelectorList>
                            <SelectorList>
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
                            </SelectorList>
                        </LoadingElement>
                    )}
                </ListGroups>
            </Container>
            {children}
        </>
    );
};

export default SelectorListsContainer;

const Divider = styled.span`
    &:last-child {
        display: none;
    }
`;
