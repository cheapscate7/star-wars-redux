import { useReducer } from 'react';

const initialState: IWithCharacterSearchState = {
    characters: [],
    charactersFiltered: [],
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

const withCharacterSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        characterSearchState: state,
        characterSearchDispatch: dispatch,
    };
};

export default withCharacterSearch;
