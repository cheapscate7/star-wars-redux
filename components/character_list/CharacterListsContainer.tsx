import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import ListGroups from '../lists_shared/ListGroups';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CharacterList from './lists/CharacterList';
import SearchContext from '../../lib/withSeachContext';
import CharacterItem from './list_items/CharacterItem';
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

/**
 * Handles rendering lists of characters
 * Must be inside a SearchContext provider
 * @constructor
 */
const CharacterListContainer: React.FC = () => {
    const { searchState } = React.useContext(SearchContext); //selected Film, Species, Planet

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
                    title={'// Characters'}
                />
            )}
            <GotoButton aria-label={'Go to Characters'} onClick={executeScroll}>
                <Arrow
                    direction={'bottom'}
                    match={'coloured_button_foreground'}
                    id={'arrow_goto_characters_button'}
                />
            </GotoButton>
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
