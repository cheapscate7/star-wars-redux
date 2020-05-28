import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import ListGroups from '../ListsShared/ListGroups';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CharacterList from './CharacterList';
import SearchContext from '../../lib/withSeachContext';
import CharacterItem from './listItems/CharacterItem';
import CharacterSearchContext from '../../lib/withCharacterSeachContext';
import { rgba } from 'polished';
import Arrow from '../icons/Arrow';

// Scroll the window to a passed ref
const scrollToRef = (ref) => {
    if (ref) {
        window.scrollTo(0, ref.current.offsetTop);
    } else {
        throw new Error('No ref passed to scrollToRef()');
    }
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

/**
 * Handles Querying the api for characters
 * Must be inside a SearchContext provider
 * @constructor
 */
const CharacterListContainer: React.FC = () => {
    const { searchState } = React.useContext(SearchContext); //selected Film, Species, Planet
    const { characterSearchState } = React.useContext(CharacterSearchContext); //Search query eg. Luke Skywalker

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
                name_contains: characterSearchState.searchTerm,
            }),
        },
        skip: !searchState.combinedQueryParams.film.id,
    });

    //allows a button to scroll to character results
    const characterListRef = useRef(null);
    const executeScroll = () => {
        scrollToRef(characterListRef);
    };

    return (
        <ListGroups>
            {searchState.combinedQueryParams.film.id && (
                <CharacterList
                    jumpTo={characterListRef}
                    loading={loading}
                    title={'// Characters'}
                >
                    <GotoButton
                        aria-label={'Go to Characters'}
                        onClick={executeScroll}
                    >
                        <Arrow
                            direction={'bottom'}
                            match={'coloured_button_foreground'}
                        />
                    </GotoButton>
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
    );
};

export default CharacterListContainer;

/**
 * a fixed button to jump to the character List
 */
const GotoButton = styled.button`
    display: flex;
    cursor: pointer;
    position: fixed;
    bottom: 0.5em;
    right: 0.5em;
    padding: 1em 1.25em;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 0;
    outline: none;
    transition: background-color 0.3s;
    ${({ theme }) => css`
        background-color: ${rgba(theme.colors.highlight_1, 0.8)};
        color: ${theme.colors.coloured_button_foreground};
        &:hover {
            background-color: ${theme.colors.highlight_1};
        }
    `};
`;
