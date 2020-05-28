import React from 'react';
import SpeciesItem from '../list_items/childItems/SpeciesItem';
import SelectorList from './SelectorList';
import { useQuery } from '@apollo/react-hooks';
import SearchContext from '../../../lib/withSeachContext';
import gql from 'graphql-tag';

const GET_SPECIES = gql`
    query getSpecies($filter: SpeciesFilter) {
        allSpecies(filter: $filter) {
            id
            name
        }
    }
`;

const SpeciesList: React.FC = () => {
    const { searchState } = React.useContext(SearchContext);
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
