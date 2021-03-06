/**
 * TYPE DECLARATIONS
 * for types that should be available throughout the project
 */

/**
 * ISWNode
 * all returned data from swapi.graph.cool shares an id type
 */
declare interface ISWNode {
    id: string;
}

/**
 * IPlanet
 * data on planets
 */
declare interface IPlanet extends ISWNode {
    name: string;
}

/**
 * ISpecies
 * data on species
 */
declare interface ISpecies extends ISWNode {
    name: string;
}

/**
 * IFilm
 * data on each film
 */
declare interface IFilm extends ISWNode {
    title: string;
}

/**
 * ICharacter
 * a particular character
 */
declare interface ICharacter {
    name: string;
    species: ISpecies[];
    homeworld: IPlanet;
    birthYear: string;
}

/**
 * GraphQL query types
 */

/**
 * IAllFilmsQuery
 * the master list that all other lists rely on contains the films of the franchise
 */
declare interface IGetFilmsQuery {
    allFilms: IFilm[];
}

/**
 * IGetPlanetsQuery
 */
declare interface IGetPlanetsQuery {
    allPlanets: IPlanet[];
}

declare interface IGetPlanetsOrSpeciesQueryVariables {
    filter: {
        films_some: {
            id: string | null;
        };
    };
}

/**
 * IGetSpeciesQuery
 */
declare interface IGetSpeciesQuery {
    allSpecies: ISpecies[];
}

/**
 * IGetCharactersQuery
 */
declare interface IGetCharactersQuery {
    allPersons: ICharacter[];
}

declare interface IGetCharactersQueryVariables {
    filter: {
        homeworld?: { id: string | null };
        films_some?: { id: string | null };
        species_some?: { id: string | null };
    };
}

/**
 * COMPONENT PROPS
 * only props that relate to multiple components are found here
 */

/**
 * IListItemProps
 * eg: FilmItem, SpeciesItem
 */
declare interface IListItemProps {
    selected: boolean;
    clickAction?: Function;
}

/**
 * IListProps
 * eg. CharacterList
 */
declare interface IListProps {
    jumpTo?: any;
    title?: string;
    loading?: boolean;
}

/**
 * States
 */

/**
 * withSearch
 */
declare interface IWithSearchState {
    combinedQueryParams: ICombinedQueryParams;
}

/**
 * withCharacterSearchContext
 */
declare interface IWithCharacterSearchState {
    characters: ICharacter[];
    searchTerm: string;
}

/**
 * THEME
 */
declare interface Theme {
    colors: {
        foreground: string;
        background: string;
        highlight_1: string;
        highlight_2?: string;
        highlight_1_contrast: string;
        highlight_2_contrast?: string;
        coloured_button_foreground: string;
    };
    fontWeights: {
        light: number;
        normal: number;
        heavy: number;
        bold: string | number;
    };
    fontSizes: {
        tiny: string;
        small: string;
        medium: string;
        large: string;
        huge: string;
    };
    shadows?: string[];
    fonts: string[];
    //an icon for use in things like loading icons
    //I use it to have a rebel alliance symbol for the light theme and an Empire symbol for dark
    iconDecor: string;
}
