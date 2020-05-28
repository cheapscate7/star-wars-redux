import PlanetItem from '../list_items/childItems/PlanetItem';
import SelectorList from './SelectorList';
import React from 'react';
import SearchContext from '../../../lib/withSeachContext';
import { useQuery } from '@apollo/react-hooks';
import { GET_PLANETS } from '../../../lib/queries/starwarsQueries';

const PlanetsList: React.FC = () => {
    const { searchState } = React.useContext(SearchContext);
    const { combinedQueryParams } = searchState;

    const { data, loading } = useQuery<
        IGetPlanetsQuery,
        IGetPlanetsOrSpeciesQueryVariables
    >(GET_PLANETS, {
        variables: {
            filter: {
                films_some: { id: combinedQueryParams.film.id || null },
            },
        },
        skip: !combinedQueryParams.film.id,
    });

    return (
        <SelectorList title={'// Planets'} loading={loading}>
            {data &&
                data.allPlanets.map((planet, index) => (
                    <PlanetItem
                        planet={planet}
                        key={`planet_${index}_${planet.name}`}
                        selected={combinedQueryParams.planet.id === planet.id}
                    >
                        <span>{planet.name}</span>
                    </PlanetItem>
                ))}
        </SelectorList>
    );
};

export default PlanetsList;
