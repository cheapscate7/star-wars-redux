import React from 'react';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CharacterList from './CharacterList';
import SearchContext from '../../lib/withSeachContext';

const GET_CHARACTERS = gql`
    query($filter: PersonFilter) {
        allPersons(filter: $filter) {
            name
        }
    }
`;

const CharacterListContainer: React.FC = () => {
    // @ts-ignore
    const { searchState } = React.useContext(SearchContext);
    console.log('Search state', searchState);
    const { loading, error, data } = useQuery<
        IGetCharactersQuery,
        IGetCharactersQueryVariables
    >(GET_CHARACTERS, {
        variables: {
            filter: {
                homeworld: {
                    id: searchState.combinedQueryParams.planet.id || null,
                },
                films_every: {
                    id: searchState.combinedQueryParams.film.id || null,
                },
                species_every: {
                    id: searchState.combinedQueryParams.species.id || null,
                },
            },
        },
        skip: !searchState.combinedQueryParams.film.id,
    });

    return (
        <Container>
            <ListGroups>
                {searchState.combinedQueryParams.film.id && (
                    <CharacterList loading={loading}>
                        {data && data.allPersons.length > 0 ? (
                            data.allPersons.map((person, index) => (
                                <p key={index}>{person.name}</p>
                            ))
                        ) : (
                            <p>no results</p>
                        )}
                    </CharacterList>
                )}
            </ListGroups>
        </Container>
    );
};

export default CharacterListContainer;
