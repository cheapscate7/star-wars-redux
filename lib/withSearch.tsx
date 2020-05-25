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
        console.log('i was called', obj);
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
function reducer(state: IWithSearchState, action): IWithSearchState {
    console.log(action);
    switch (action.type) {
        case 0:
            const newState = {
                combinedQueryParams: {
                    ...state.combinedQueryParams,
                    film: action.payload,
                },
            };
            console.log(newState);
            return newState;
        case 1:
            state.combinedQueryParams.species = action.payload;
            return state;
        case 2:
            state.combinedQueryParams.planet = action.payload;
            return state;
        case 3:
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
