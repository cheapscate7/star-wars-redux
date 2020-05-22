declare interface ISWNode {
    id: string;
}

declare interface IPlanet extends ISWNode {
    name: string;
}

declare interface ISpecies extends ISWNode {
    name: string;
}

declare interface IFilm extends ISWNode {
    title: string;
}

declare interface IAll_films_data {
    allFilms: IFilm[];
}

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

declare interface IListItemProps {
    selected: boolean;
    clickAction: any;
}

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
    shadows: string[];
    fonts: string[];
}
