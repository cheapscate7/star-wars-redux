declare interface ISWNode {
  id: string;
}

declare interface IPlanet extends ISWNode {}

declare interface ISpecies extends ISWNode {}

declare interface IFilm extends ISWNode {}

declare interface ICharactersQueryVariables {
  homeworld?: ISWNode;
  films_every?: ISWNode;
  species_every?: ISWNode;
}
