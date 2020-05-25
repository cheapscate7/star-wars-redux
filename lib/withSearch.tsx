import { useReducer } from 'react';

const initialState: IWithSearchState = {
    combinedQueryParams: {
        film: {
            id: '',
            title: '',
        },
        species: {
            id: '',
            name: '',
        },
        planet: {
            id: '',
            name: '',
        },
    },
};

enum Actions {
    FilmObjectSet,
    SpeciesObjectSet,
    PlanetObjectSet,
    FilmObjectUnset,
    SpeciesObjectUnset,
    PlanetObjectUnset,
    StateCleared,
}

export const searchActions = {
    reset() {
        return {
            type: Actions.StateCleared,
        } as const;
    },
    setFilmObject(obj: IFilm) {
        return {
            payload: obj,
            type: Actions.FilmObjectSet,
        } as const;
    },
    setSpeciesObject(obj: ISpecies) {
        return {
            payload: obj,
            type: Actions.SpeciesObjectSet,
        } as const;
    },
    setPlanetObject(obj: IPlanet) {
        return {
            payload: obj,
            type: Actions.PlanetObjectSet,
        } as const;
    },
    unsetFilmObject() {
        return {
            payload: {
                id: '',
                title: '',
            },
            type: Actions.FilmObjectUnset,
        } as const;
    },
    unsetSpeciesObject() {
        return {
            payload: {
                name: '',
                title: '',
            },
            type: Actions.SpeciesObjectUnset,
        } as const;
    },
    unsetPlanetObject() {
        return {
            payload: {
                name: '',
                title: '',
            },
            type: Actions.PlanetObjectUnset,
        } as const;
    },
};
interface IAction {
    type: Actions;
    payload: any;
}
function reducer(state: IWithSearchState, action: IAction): IWithSearchState {
    if (
        action.type === Actions.FilmObjectSet ||
        action.type === Actions.FilmObjectUnset
    ) {
        return {
            combinedQueryParams: {
                ...initialState.combinedQueryParams,
                film: action.payload,
            },
        };
    } else if (
        action.type === Actions.SpeciesObjectSet ||
        action.type === Actions.SpeciesObjectUnset
    ) {
        return {
            combinedQueryParams: {
                ...state.combinedQueryParams,
                species: action.payload,
            },
        };
    } else if (
        action.type === Actions.PlanetObjectSet ||
        action.type === Actions.PlanetObjectUnset
    ) {
        return {
            combinedQueryParams: {
                ...state.combinedQueryParams,
                planet: action.payload,
            },
        };
    } else if (action.type === Actions.StateCleared) {
        return initialState;
    } else {
        return state;
    }
}

const withSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        searchState: state,
        searchDispatch: dispatch,
    };
};

export default withSearch;
