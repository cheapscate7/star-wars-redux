import React from 'react';
import styled, { css } from 'styled-components';

type FilmItemProps = {
    film: IFilm;
};

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
    return <Item>{film.title}</Item>;
};

export default FilmItem;

const Item = styled.li`
    position: relative;
    padding: 1em 2em;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
    `};

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-top: 1em solid transparent;
        border-right: 1em solid black;
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;
