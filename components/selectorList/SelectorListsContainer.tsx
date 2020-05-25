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
import PlanetItem from './listItems/childItems/PlanetItem';
import removeUndefined from '../../lib/helpers/arrays';

const ALL_FILMS = gql`
    query getAllFilms {
        allFilms {
            id
            title
        }
    }
`;

const FILM_CHILDREN = gql`
    query getSpeciesAndPlanetsFromFilm($id: ID) {
        Film(id: $id) {
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
const SelectorListsContainer: React.FC = () => {
    const masterQuery = useQuery<IAllFilmsQuery>(ALL_FILMS);
    const { searchState, searchDispatch } = React.useContext(SearchContext);
    const { combinedQueryParams } = searchState;
    const childQuery = useQuery<
        IFilmChildrenQuery,
        IFilmChildrenQueryVariables
    >(FILM_CHILDREN, {
        variables: {
            id: combinedQueryParams.film.id || null,
        },
        skip: !combinedQueryParams.film.id,
    });

    let showChildren = !!combinedQueryParams.film.id;

    return (
        <Container>
            <BreadCrumb
                items={removeUndefined([
                    combinedQueryParams.film.title,
                    combinedQueryParams.species.name,
                    combinedQueryParams.planet.name,
                ])}
            />

            <ListGroups>
                <SelectorList loading={masterQuery.loading} title={'// Film'}>
                    {masterQuery.data &&
                        masterQuery.data.allFilms.map((film, index) => (
                            <FilmItem
                                key={`${film.title}_${index}`}
                                film={film}
                                selected={
                                    combinedQueryParams.film.id === film.id
                                }
                                clickAction={searchDispatch}
                            >
                                <span>{film.title}</span>
                            </FilmItem>
                        ))}
                </SelectorList>
                {showChildren && (
                    <LoadingElement loading={childQuery.loading}>
                        <SelectorList title={'// Species'}>
                            {childQuery.data &&
                                childQuery.data.Film.species.map(
                                    (species, index) => (
                                        <SpeciesItem
                                            species={species}
                                            key={`species_${index}_${species.name}`}
                                            selected={
                                                combinedQueryParams.species
                                                    .id === species.id
                                            }
                                            clickAction={searchDispatch}
                                        >
                                            <span>{species.name}</span>
                                        </SpeciesItem>
                                    )
                                )}
                        </SelectorList>
                        <SelectorList title={'// Planets'}>
                            {childQuery.data &&
                                childQuery.data.Film.planets.map(
                                    (planet, index) => (
                                        <PlanetItem
                                            planet={planet}
                                            key={`planet_${index}_${planet.name}`}
                                            selected={
                                                combinedQueryParams.planet
                                                    .id === planet.id
                                            }
                                            clickAction={searchDispatch}
                                        >
                                            <span>{planet.name}</span>
                                        </PlanetItem>
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
