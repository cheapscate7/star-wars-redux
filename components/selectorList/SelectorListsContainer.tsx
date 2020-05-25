import styled from 'styled-components';
import React, { useEffect } from 'react';
import BreadCrumb from './BreadCrumb';
import SelectorList from './SelectorList';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FilmItem from './listItems/FilmItem';
import withSearch from '../../lib/withSearch';
import SpeciesItem from './listItems/childItems/SpeciesItem';
import LoadingElement from '../LoadingElement';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import SearchContext from '../..//lib/withSeachContext';

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
    const masterQuery = useQuery<IAllFilmsQuery>(ALL_FILMS);
    //@ts-ignore
    const { searchState, searchDispatch } = React.useContext(SearchContext);
    const childQuery = useQuery<
        IFilmChildrenQuery,
        IFilmChildrenQueryVariables
    >(FILM_CHILDREN, {
        variables: {
            id: searchState.combinedQueryParams.film.id || null,
        },
        skip: !searchState.combinedQueryParams.film.id,
    });

    let showChildren = !!searchState.combinedQueryParams.film.id;

    return (
        <Container>
            <BreadCrumb>
                <div>{searchState.combinedQueryParams.film.title}</div>
                {searchState.combinedQueryParams.film.title &&
                    searchState.combinedQueryParams.species.name && (
                        <Divider>|</Divider>
                    )}
                <div>{searchState.combinedQueryParams.species.name}</div>
                {searchState.combinedQueryParams.film.title &&
                    searchState.combinedQueryParams.planet.name && (
                        <Divider>|</Divider>
                    )}
                <div>{searchState.combinedQueryParams.planet.name}</div>
            </BreadCrumb>

            <ListGroups>
                <SelectorList loading={masterQuery.loading}>
                    {masterQuery.data &&
                        masterQuery.data.allFilms.map((film, index) => (
                            <FilmItem
                                key={`${film.title}_${index}`}
                                film={film}
                                selected={
                                    searchState.combinedQueryParams.film.id ===
                                    film.id
                                }
                                clickAction={searchDispatch}
                            >
                                <span>{film.title}</span>
                            </FilmItem>
                        ))}
                </SelectorList>
                {showChildren && (
                    <LoadingElement loading={childQuery.loading}>
                        <SelectorList>
                            {childQuery.data &&
                                childQuery.data.Film.species.map(
                                    (species, index) => (
                                        <SpeciesItem
                                            species={species}
                                            key={`species_${index}_${species.name}`}
                                            selected={
                                                searchState.combinedQueryParams
                                                    .species.id === species.id
                                            }
                                            clickAction={searchDispatch}
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
                                            key={`planet_${index}_${planet.name}`}
                                            selected={
                                                searchState.combinedQueryParams
                                                    .planet.id === planet.id
                                            }
                                            clickAction={searchDispatch}
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
    );
};

export default SelectorListsContainer;

const Divider = styled.span`
    &:only-child {
        display: none;
    }
`;
