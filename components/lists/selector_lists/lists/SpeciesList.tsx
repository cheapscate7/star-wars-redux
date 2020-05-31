import React from 'react';
import SpeciesItem from '../list_items/childItems/SpeciesItem';
import SelectorList from './SelectorList';
import { useQuery } from '@apollo/react-hooks';
import { GET_SPECIES } from '../../../../lib/queries/starwarsQueries';
import { useSearchState } from '../../../../lib/withSearch';

const SpeciesList: React.FC = () => {
    const searchState = useSearchState(); //selected Film, Species, Planet
    const { combinedQueryParams } = searchState;

    const { data, loading } = useQuery<
        IGetSpeciesQuery,
        IGetPlanetsOrSpeciesQueryVariables
    >(GET_SPECIES, {
        variables: {
            filter: {
                films_some: { id: combinedQueryParams.film.id || null },
            },
        },
        skip: !combinedQueryParams.film.id,
    });

    return (
        <SelectorList title={'// Species'} loading={loading}>
            {data &&
                data.allSpecies.map((species, index) => (
                    <SpeciesItem
                        species={species}
                        key={`species_${index}_${species.name}`}
                        selected={combinedQueryParams.species.id === species.id}
                    >
                        <span>{species.name}</span>
                    </SpeciesItem>
                ))}
        </SelectorList>
    );
};

export default SpeciesList;
