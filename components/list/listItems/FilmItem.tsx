import React from 'react';

type FilmItemProps = {
    film: IFilm;
};

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
    return <li>{film.title}</li>;
};

export default FilmItem;
