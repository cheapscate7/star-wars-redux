import React from 'react';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CharacterList from './CharacterList';
import withSearchContext from '../../lib/withSeachContext';
import SearchContext from '../../lib/withSeachContext';

const GET_CHARACTERS = gql`
    query($filter: PersonFilter) {
        allPersons(filter: $filter) {
            name
        }
    }
`;

interface I {
    allPersons: { name: string }[];
}

const CharacterListContainer: React.FC = () => {
    // @ts-ignore
    const { searchState } = React.useContext(SearchContext);
    console.log(searchState.currentFilmId);
    const characterQuery = useQuery<I, ICharactersQueryVariables>(
        GET_CHARACTERS,
        {
            variables: {
                filter: {
                    homeworld: {
                        id: searchState.combinedQueryParams.planetId || null,
                    },
                    films_every: {
                        id: searchState.combinedQueryParams.filmId || null,
                    },
                    species_every: {
                        id: searchState.combinedQueryParams.speciesId || null,
                    },
                },
            },
            skip: !searchState.currentFilmId,
        }
    );
    console.log(characterQuery.data);
    return (
        <Container>
            <ListGroups>
                {searchState.currentFilmId && (
                    <CharacterList loading={characterQuery.loading}>
                        {characterQuery.data.allPersons.map((person, index) => (
                            <p key={index}>{person.name}</p>
                        ))}
                    </CharacterList>
                )}
            </ListGroups>
        </Container>
    );
};

export default CharacterListContainer;
