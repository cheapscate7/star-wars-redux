import gql from 'graphql-tag';

export const ALL_FILMS = gql`
    query getAllFilms {
        allFilms {
            id
            title
        }
    }
`;

export const GET_SPECIES = gql`
    query getSpecies($filter: SpeciesFilter) {
        allSpecies(filter: $filter) {
            id
            name
        }
    }
`;

export const GET_PLANETS = gql`
    query getPlanets($filter: PlanetFilter) {
        allPlanets(filter: $filter) {
            id
            name
        }
    }
`;

export const GET_CHARACTERS = gql`
    query getCharacters($filter: PersonFilter) {
        allPersons(filter: $filter) {
            name
            species {
                id
                name
            }
            birthYear
            homeworld {
                id
                name
            }
        }
    }
`;
