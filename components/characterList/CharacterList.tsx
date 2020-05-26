import styled, { css } from 'styled-components';
import React from 'react';
import LoadingElement from '../LoadingElement';
import CharacterSearchContext from '../../lib/withCharacterSeachContext';
import { characterSearchActions } from '../../lib/withCharacterSearch';
import { DebounceInput } from 'react-debounce-input';

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

const Container = styled.section`
    padding: 0 1em;
    ${({ theme }) => css`
        font-family: ${theme.fonts[2] || theme.fonts[0]};
        color: ${theme.colors.foreground};
        @keyframes flash-animation {
            0% {
                background-color: ${theme.colors.foreground};
            }
            5% {
                background-color: transparent;
            }
        }
    `};

    &:focus {
        animation-name: flash-animation;
        animation-duration: 1s;
        animation-iteration-count: 1;
    }
`;

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
