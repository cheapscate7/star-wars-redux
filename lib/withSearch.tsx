import { useReducer } from 'react';

interface ICombinedQueryParams {
    film: IFilm;
    species: ISpecies;
    planet: IPlanet;
}

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
};
interface IAction {
    type: Actions;
    payload: any;
}
function reducer(state: IWithSearchState, action: IAction): IWithSearchState {
    switch (action.type) {
        case Actions.FilmObjectSet:
            return {
                combinedQueryParams: {
                    ...state.combinedQueryParams,
                    film: action.payload,
                },
            };
        case Actions.SpeciesObjectSet:
            return {
                combinedQueryParams: {
                    ...state.combinedQueryParams,
                    species: action.payload,
                },
            };
        case Actions.PlanetObjectSet:
            return {
                combinedQueryParams: {
                    ...state.combinedQueryParams,
                    planet: action.payload,
                },
            };
        case Actions.StateCleared:
            return initialState;
    }

    return state;
}

const withSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        searchState: state,
        searchDispatch: dispatch,
    };
};

export default withSearch;
