import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CharacterList from './CharacterList';
import SearchContext from '../../lib/withSeachContext';
import CharacterItem from './listItems/CharacterItem';

const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
};

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

/**
 * removes values of the filter with a null id
 * @param filter
 */
const buildFilter = (filter) => {
    Object.keys(filter).forEach(
        (key) => filter[key].id === null && delete filter[key]
    );
    return filter;
};

const CharacterListContainer: React.FC = () => {
    const { searchState } = React.useContext(SearchContext);
    const { loading, data } = useQuery<
        IGetCharactersQuery,
        IGetCharactersQueryVariables
    >(GET_CHARACTERS, {
        variables: {
            filter: buildFilter({
                homeworld: {
                    id: searchState.combinedQueryParams.planet.id || null,
                },
                films_some: {
                    id: searchState.combinedQueryParams.film.id || null,
                },
                species_some: {
                    id: searchState.combinedQueryParams.species.id || null,
                },
            }),
        },
        skip: !searchState.combinedQueryParams.film.id,
    });

    const characterListRef = useRef(null);
    const executeScroll = () => scrollToRef(characterListRef);

    return (
        <Container>
            <ListGroups>
                {searchState.combinedQueryParams.film.id && (
                    <CharacterList
                        jumpTo={characterListRef}
                        loading={loading}
                        title={'// Characters'}
                    >
                        <GotoButton onClick={executeScroll}>Results</GotoButton>
                        {data && data.allPersons.length > 0 ? (
                            data.allPersons.map((person, index) => (
                                <CharacterItem
                                    character={person}
                                    selected={false}
                                    key={`character_item_${index}_${
                                        person.name && person.name
                                    }`}
                                />
                            ))
                        ) : (
                            <CharacterItem character={null} selected={false}>
                                No Results
                            </CharacterItem>
                        )}
                    </CharacterList>
                )}
            </ListGroups>
        </Container>
    );
};

export default CharacterListContainer;

const GotoButton = styled.button`
    cursor: pointer;
    position: fixed;
    bottom: 0.5em;
    right: 0.5em;
    padding: 1em 1.5em;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: rgba(0, 28, 213, 0.8);
    color: white;
    border: 0;
    object {
        width: 0.5em;
        height: 0.5em;
        fill: white;
    }
`;
