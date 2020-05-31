import React, { useReducer } from 'react';

const initialState: IWithCharacterSearchState = {
    characters: [],
    searchTerm: '',
};

enum Actions {
    SearchTermSet,
    CharactersSet,
    SearchTermUnset,
    CharactersUnset,
    StateCleared,
}

export const characterSearchActions = {
    reset() {
        return {
            type: Actions.StateCleared,
        } as const;
    },
    setSearchTerm(searchString: string) {
        return {
            payload: searchString,
            type: Actions.SearchTermSet,
        } as const;
    },
    setCharacters(characters: ICharacter[]) {
        return {
            payload: characters,
            type: Actions.CharactersSet,
        } as const;
    },
    unsetSearchTerm() {
        return {
            payload: '',
            type: Actions.SearchTermUnset,
        } as const;
    },
    unsetCharacters() {
        return {
            payload: [],
            type: Actions.CharactersUnset,
        } as const;
    },
};
interface IAction<T> {
    type: Actions;
    payload: T;
}
function reducer(
    state: IWithCharacterSearchState,
    action: IAction<any>
): IWithCharacterSearchState {
    if (
        action.type === Actions.SearchTermSet ||
        action.type === Actions.SearchTermUnset
    ) {
        console.log('called');
        return {
            ...state,
            searchTerm: action.payload,
        };
    } else if (
        action.type === Actions.CharactersSet ||
        action.type === Actions.CharactersUnset
    ) {
        return {
            ...state,
            characters: action.payload,
        };
    } else {
        return state;
    }
}

const CharacterSearchStateContext = React.createContext<
    Partial<IWithCharacterSearchState>
>(initialState);
const CharacterSearchDispatchContext = React.createContext(null);

export const CharacterSearchProvider: React.FC = ({ children }) => {
    const [characterSearchState, characterSearchDispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <CharacterSearchStateContext.Provider value={characterSearchState}>
            <CharacterSearchDispatchContext.Provider
                value={characterSearchDispatch}
            >
                {children}
            </CharacterSearchDispatchContext.Provider>
        </CharacterSearchStateContext.Provider>
    );
};

export const useCharacterSearchState = () => {
    const context = React.useContext(CharacterSearchStateContext);
    if (context === undefined) {
        throw new Error(
            'useCharacterSearchState must be used within a CharacterSearchProvider'
        );
    } else {
        return context;
    }
};

export const useCharacterSearchDispatch = () => {
    const context = React.useContext(CharacterSearchDispatchContext);
    if (context === undefined) {
        throw new Error(
            'useCharacterSearchDispatch must be used within a CharacterSearchProvider'
        );
    } else {
        return context;
    }
};
