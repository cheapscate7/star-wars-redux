import React from 'react';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CharacterList from './CharacterList';
import SearchContext from '../../lib/withSeachContext';
import dynamic from 'next/dynamic';

const CharacterItem = dynamic(() => import('./listItems/CharacterItem'));

const GET_CHARACTERS = gql`
    query getCharacters($filter: PersonFilter) {
        allPersons(filter: $filter) {
            name
            species {
                id
                name
            }
            birthYear
            homeworld {
                id
                name
            }
        }
    }
`;

const CharacterListContainer: React.FC = () => {
    const { searchState } = React.useContext(SearchContext);
    const { loading, data } = useQuery<
        IGetCharactersQuery,
        IGetCharactersQueryVariables
    >(GET_CHARACTERS, {
        variables: {
            filter: {
                homeworld: {
                    id: searchState.combinedQueryParams.planet.id || null,
                },
                films_some: {
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
                                <CharacterItem
                                    character={person}
                                    selected={false}
                                    clickAction={() => {}}
                                    key={index}
                                />
                            ))
                        ) : (
                            <CharacterItem
                                character={null}
                                selected={false}
                                clickAction={() => {}}
                            >
                                no results
                            </CharacterItem>
                        )}
                    </CharacterList>
                )}
            </ListGroups>
        </Container>
    );
};

export default CharacterListContainer;
