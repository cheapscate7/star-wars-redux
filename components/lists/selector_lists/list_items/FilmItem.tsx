import React from 'react';
import AddFilmButton from '../../../buttons/AddFilmButton';
import Item from './Item';

interface FilmItemProps extends IListItemProps {
    film: IFilm;
}

/**
 * renders an individual film's data in a <List> component
 * @param film  type: IFilm     the film data to be rendered
 * @param selected  type: boolean   triggers special css if film is selected
 * @param children  type: ReactNode
 * @constructor
 */
const FilmItem: React.FC<FilmItemProps> = ({ film, selected, children }) => {
    return (
        <Item className={selected && 'active'}>
            {children}
            <AddFilmButton selected={selected} film={film} />
        </Item>
    );
};

export default FilmItem;
