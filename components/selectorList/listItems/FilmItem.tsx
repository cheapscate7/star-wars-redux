import React from 'react';
import styled, { css } from 'styled-components';
import { searchActions } from '../../../lib/withSearch';
import AddOptionButton from './AddOptionButton';

interface FilmItemProps extends IListItemProps {
    film: IFilm;
}

/**
 * renders an individual film's data in a <List> component
 * @param film  type: IFilm     the film data to be rendered
 * @param selected  type: boolean   triggers special css if film is selected
 * @param clickAction   type: function  action when button is pressed
 * @param children  type: DocumentNode
 * @constructor
 */
const FilmItem: React.FC<FilmItemProps> = ({
    film,
    selected,
    clickAction,
    children,
}) => {
    return (
        <Item className={selected && 'active'}>
            {children}
            <AddOptionButton
                onClick={() =>
                    clickAction(searchActions.setCurrentFilmId(film.id))
                }
            >
                <img alt={'next option'} src={'/arrow-right.svg'} />
            </AddOptionButton>
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
    transition: 0.2s ease;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
        font-size: ${theme.fontSizes.small};
        &.active {
            border-right: 0.25em double ${theme.colors.foreground};
        }
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
    }

    &:hover {
        ${({ theme }) => css`
            border: 1px solid ${theme.colors.highlight_1};
            color: ${theme.colors.highlight_1};
            font-weight: ${theme.fontWeights.bold};
            padding: 1.2em 2.2em;
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
        &.active {
          margin-left: 1em;
        }
    }
    &:last-child {
        margin-top: 0.5em;
        &.active {
          margin-left: 1em;
        }
    }
    &:not(:first-child):not(:last-child) {
        margin: 0.5em auto;
        &.active {
          margin-left: 1em;
        }
    }
`;