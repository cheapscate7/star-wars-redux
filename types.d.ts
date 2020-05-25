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

declare interface ICharacter {
    name: string;
}

/**
 * GraphQL query types
 */
/**
 * IAllFilmsQuery
 * the master list that all other lists rely on contains the films of the franchise
 */
declare interface IAllFilmsQuery {
    allFilms: IFilm[];
}

/**
 * IGetCharactersQuery
 */
declare interface IGetCharactersQuery {
    allPersons: { name: string }[];
}

/**
 * IFilmChildrenQuery
 * lists of species and planets rely on a film
 */
declare interface IFilmChildrenQuery {
    Film: {
        title: string;
        species: ISpecies[];
        planets: IPlanet[];
    };
}

declare interface IFilmChildrenQueryVariables {
    id: string | null;
}

declare interface IGetCharactersQueryVariables {
    filter: {
        homeworld?: { id: string | undefined };
        films_every?: { id: string | undefined };
        species_every?: { id: string | undefined };
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
    clickAction: any;
}

declare interface IListProps {
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
}
