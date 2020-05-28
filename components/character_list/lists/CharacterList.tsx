import styled, { css } from 'styled-components';
import React from 'react';
import LoadingElement from '../../loading/LoadingElement';
import CharacterSearchContext from '../../../lib/withCharacterSeachContext';
import { characterSearchActions } from '../../../lib/withCharacterSearch';
import { DebounceInput } from 'react-debounce-input';
import CharacterItem from '../list_items/CharacterItem';
import { useQuery } from '@apollo/react-hooks';
import SearchContext from '../../../lib/withSeachContext';
import { GET_CHARACTERS } from '../../../lib/queries/starwarsQueries';

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
 * Queries for a list of Characters
 * Renders a list of <CharacterItem>
 * @param jumpTo    a ref used for jumping to the list if there are any results
 * @param title     optional header for the list
 * @param children
 * @constructor
 */
const CharacterList: React.FC<IListProps> = ({ jumpTo, title, children }) => {
    const { searchState } = React.useContext(SearchContext); //selected Film, Species, Planet
    const { combinedQueryParams } = searchState;
    const { characterSearchState, characterSearchDispatch } = React.useContext(
        CharacterSearchContext
    );

    const updateSearchTerm = (event) => {
        characterSearchDispatch(
            characterSearchActions.setSearchTerm(event.target.value)
        );
    };

    const { loading, data } = useQuery<
        IGetCharactersQuery,
        IGetCharactersQueryVariables
    >(GET_CHARACTERS, {
        variables: {
            filter: buildFilter({
                homeworld: {
                    id: combinedQueryParams.planet.id || null,
                },
                films_some: {
                    id: combinedQueryParams.film.id || null,
                },
                species_some: {
                    id: combinedQueryParams.species.id || null,
                },
                name_contains: characterSearchState.searchTerm,
            }),
        },
        skip: !combinedQueryParams.film.id,
    });

    return (
        <Container ref={jumpTo}>
            {title && <h2>{title}</h2>}
            <DebounceInput
                minLength={1}
                debounceTimeout={400}
                element={Search}
                value={characterSearchState.searchTerm}
                onChange={updateSearchTerm}
                placeholder={'Character Name'}
            />
            <List>
                <LoadingElement loading={loading}>
                    {children}
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
                </LoadingElement>
            </List>
        </Container>
    );
};

export default CharacterList;

/**
 * holds the List as well as an optional title
 */
const Container = styled.section`
    padding: 0 1em;
    ${({ theme }) => css`
        font-family: ${theme.fonts[2] || theme.fonts[0]};
        color: ${theme.colors.foreground};
    `};
`;

/**
 * Renders a list of <CharacterItem> in a grid
 */
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 0.5em;
    row-gap: 0.5em;
    padding: 1em 2em;
    @media (max-width: 425px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

/**
 * A search box for filtering Character results
 */
const Search = styled.input`
    background-color: transparent;
    padding: 0.75em 1.2em;
    outline: none;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
        color: ${theme.colors.foreground};
        &:focus {
            border: 1px solid ${theme.colors.highlight_1};
        }
    `};
`;
