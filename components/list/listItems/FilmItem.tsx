import React from 'react';
import styled, { css } from 'styled-components';
import { searchActions } from '../../../lib/withSearch';

type FilmItemProps = {
    film: IFilm;
    clickAction: any;
};

const FilmItem: React.FC<FilmItemProps> = ({ film, clickAction }) => {
    return (
        <Item>
            {film.title}
            <NextOptionButton
                onClick={() =>
                    clickAction(searchActions.setCurrentFilmId(film.id))
                }
            >
                <img alt={'next option'} src={'/arrow-right.svg'} />
            </NextOptionButton>
        </Item>
    );
};

export default FilmItem;

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    padding: 1em 2em;
    cursor: pointer;
    transition: 0.2s ease;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
    `};

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        bottom: auto;
        left: -1px;
        right: auto;
        height: 0.5em;
        padding: 10px 0.25em;
        transition: 0.2s ease;
        ${({ theme }) => css`
            border: 1px solid ${theme.colors.foreground};
            border-left: 1px solid ${theme.colors.background};
            border-top: 1px solid ${theme.colors.background};
        `};
    }

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-top: 1em solid transparent;
        position: absolute;
        bottom: 0;
        right: 0;
        transition-delay: 0.2s;
        transition: 0.2s ease;
        ${({ theme }) => css`
            border-right: 1em solid ${theme.colors.foreground};
        `};
    }

    &:hover {
        ${({ theme }) => css`
            border: 1px solid ${theme.colors.highlight_1};
            color: ${theme.colors.highlight_1};
            font-weight: ${theme.fontWeights.bold};
            &::before {
                border: 1px solid ${theme.colors.highlight_1};
                border-left: 1px solid ${theme.colors.background};
                border-top: 1px solid ${theme.colors.background};
            }
            &::after {
                border-top: 1.5em solid transparent;
                border-right: 1.5em solid ${theme.colors.highlight_1};
            }
        `};
    }

    &:first-child {
        margin-bottom: 0.5em;
    }
    &:last-child {
        margin-top: 0.5em;
    }
    &:not(:first-child):not(:last-child) {
        margin: 0.25em auto;
    }
`;

const NextOptionButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2em;
    background-color: white;
    border: 0;
    img {
        width: 16px;
        height: 16px;
    }
`;
