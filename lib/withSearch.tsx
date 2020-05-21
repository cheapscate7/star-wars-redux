import { useReducer } from 'react';

interface ICombinedQueryParams {
    filmId: string | null;
    speciesId: string | null;
    planetId: string | null;
}

interface IWithSearchState {
    currentFilmId: string | null;
    combinedQueryParams: ICombinedQueryParams;
}

const initialState: IWithSearchState = {
    currentFilmId: null,
    combinedQueryParams: {
        filmId: null,
        speciesId: null,
        planetId: null,
    },
};

enum Actions {
    CurrentFilmIdSet,
    CombinedQueryParamSet,
    StateCleared,
}

const searchActions = {
    reset() {
        return {
            type: Actions.StateCleared,
        } as const;
    },
    setCurrentFilmId(id: string) {
        return {
            payload: id,
            type: Actions.CurrentFilmIdSet,
        } as const;
    },
    setCombinedQueryParam(key: string, value: string) {
        return {
            payload: {
                key,
                value,
            },
            type: Actions.CurrentFilmIdSet,
        } as const;
    },
};
interface IAction {
    type: Actions;
    payload: any;
}
function reducer(state: IWithSearchState, action: IAction): IWithSearchState {
    switch (action.type) {
        case Actions.StateCleared:
            return initialState;
        case Actions.CurrentFilmIdSet:
            return {
                ...state,
                currentFilmId: action.payload,
            };
        case Actions.CombinedQueryParamSet:
            let { combinedQueryParams } = state;
            combinedQueryParams[action.payload.key] = action.payload.value;
            return {
                ...state,
                combinedQueryParams,
            };
    }

    return state;
}

const withSearch = (init: () => IWithSearchState = null) => {
    const [state, dispatch] = useReducer(reducer, initialState, init);

    return {
        searchState: state,
        searchDispatch: dispatch,
    };
};

export default withSearch;
