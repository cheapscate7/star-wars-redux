import styled, { css } from 'styled-components';
import React from 'react';
import LoadingElement from '../loading/LoadingElement';
import CharacterSearchContext from '../../lib/withCharacterSeachContext';
import { characterSearchActions } from '../../lib/withCharacterSearch';
import { DebounceInput } from 'react-debounce-input';

/**
 * List of Characters
 * Renders a list of <CharacterItem>
 * @param jumpTo    a ref used for jumping to the list if there are any results
 * @param title     optional header for the list
 * @param loading   type:boolean    if the query data is still loading
 * @param children  Document node of <CharacterItem>
 * @constructor
 */
const CharacterList: React.FC<IListProps> = ({
    jumpTo,
    title,
    loading,
    children,
}) => {
    const { characterSearchState, characterSearchDispatch } = React.useContext(
        CharacterSearchContext
    );
    const updateSearchTerm = (event) => {
        characterSearchDispatch(
            characterSearchActions.setSearchTerm(event.target.value)
        );
    };
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
                <LoadingElement loading={loading}>{children}</LoadingElement>
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
