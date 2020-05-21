declare interface ISWNode {
    id: string;
}

declare interface IPlanet extends ISWNode {}

declare interface ISpecies extends ISWNode {}

declare interface IFilm extends ISWNode {
    title: string;
}

declare interface ICharactersQueryVariables {
    homeworld?: ISWNode;
    films_every?: ISWNode;
    species_every?: ISWNode;
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
