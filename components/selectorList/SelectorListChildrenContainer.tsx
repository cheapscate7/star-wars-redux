import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import SearchContext from '../../lib/withSeachContext';
import SelectorList from './SelectorList';
import SpeciesItem from './listItems/childItems/SpeciesItem';
import PlanetItem from './listItems/childItems/PlanetItem';
import LoadingElement from '../LoadingElement';

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

const SelectorListChildrenContainer = () => {
    const { searchState } = React.useContext(SearchContext);
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

    return (
        <LoadingElement loading={childQuery.loading}>
            <SelectorList title={'// Species'}>
                {childQuery.data &&
                    childQuery.data.Film.species.map((species, index) => (
                        <SpeciesItem
                            species={species}
                            key={`species_${index}_${species.name}`}
                            selected={
                                combinedQueryParams.species.id === species.id
                            }
                        >
                            <span>{species.name}</span>
                        </SpeciesItem>
                    ))}
            </SelectorList>
            <SelectorList title={'// Planets'}>
                {childQuery.data &&
                    childQuery.data.Film.planets.map((planet, index) => (
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
