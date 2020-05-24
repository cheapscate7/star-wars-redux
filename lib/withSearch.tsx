import { useReducer } from 'react';

interface ICombinedQueryParams {
    film: IFilm;
    species: ISpecies;
    planet: IPlanet;
}

interface IWithSearchState {
    combinedQueryParams: ICombinedQueryParams;
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
        case Actions.StateCleared:
            return initialState;
        case Actions.FilmObjectSet:
            state.combinedQueryParams.film = action.payload;
            return state;
        case Actions.SpeciesObjectSet:
            state.combinedQueryParams.species = action.payload;
            return state;
        case Actions.PlanetObjectSet:
            state.combinedQueryParams.planet = action.payload;
            return state;
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
