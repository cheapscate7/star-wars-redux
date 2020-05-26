import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import SearchContext from '../../lib/withSeachContext';
import SelectorList from './SelectorList';
import SpeciesItem from './listItems/childItems/SpeciesItem';
import PlanetItem from './listItems/childItems/PlanetItem';
import LoadingElement from '../LoadingElement';

const FILM_CHILDREN = gql`
    query getSpeciesAndPlanetsFromFilm($filter: FilmFilter) {
        allFilms(filter: $filter) {
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

const buildFilter = (filter) => {
    //filter[key].id === null && delete filter[key]
    Object.keys(filter).forEach((key) => {
        if (key === 'id') {
            filter['key'] === null && delete filter[key];
        } else {
            filter[key].id === null && delete filter[key];
        }
    });
    return filter;
};

const SelectorListChildrenContainer = () => {
    const { searchState } = React.useContext(SearchContext);
    const { combinedQueryParams } = searchState;
    const childQuery = useQuery<
        IFilmChildrenQuery,
        IFilmChildrenQueryVariables
    >(FILM_CHILDREN, {
        variables: {
            filter: buildFilter({
                id: combinedQueryParams.film.id || null,
                species_some: { id: combinedQueryParams.species.id || null },
            }),
        },
        skip: !combinedQueryParams.film.id,
    });

    return (
        <LoadingElement loading={childQuery.loading}>
            <SelectorList title={'// Species'}>
                {childQuery.data &&
                    childQuery.data.allFilms[0].species.map(
                        (species, index) => (
                            <SpeciesItem
                                species={species}
                                key={`species_${index}_${species.name}`}
                                selected={
                                    combinedQueryParams.species.id ===
                                    species.id
                                }
                            >
                                <span>{species.name}</span>
                            </SpeciesItem>
                        )
                    )}
            </SelectorList>
            <SelectorList title={'// Planets'}>
                {childQuery.data &&
                    childQuery.data.allFilms[0].planets.map((planet, index) => (
                        <PlanetItem
                            planet={planet}
                            key={`planet_${index}_${planet.name}`}
                            selected={
                                combinedQueryParams.planet.id === planet.id
                            }
                        >
                            <span>{planet.name}</span>
                        </PlanetItem>
                    ))}
            </SelectorList>
        </LoadingElement>
    );
};

export default SelectorListChildrenContainer;
