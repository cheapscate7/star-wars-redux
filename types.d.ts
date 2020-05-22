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
 * GraphQL query types
 */
/**
 * IAll_films_data
 * the master list that all other lists rely on contains the films of the franchise
 */
declare interface IAll_films_data {
    allFilms: IFilm[];
}

/**
 * IFilmChildrenData
 * lists of species and planets rely on a film
 */
declare interface IFilmChildrenData {
    Film: {
        title: string;
        species: ISpecies[];
        planets: IPlanet[];
    };
}

declare interface ICharactersQueryVariables {
    homeworld?: ISWNode;
    films_every?: ISWNode;
    species_every?: ISWNode;
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
