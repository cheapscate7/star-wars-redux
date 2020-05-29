import React from 'react';
import SearchContext from '../../lib/withSeachContext';
import { searchActions } from '../../lib/withSearch';
import TransparentButton from './TransparentButton';
import Arrow from '../icons/Arrow';

interface IAddFilmButton {
    film: IFilm;
    selected: boolean;
}

const AddFilmButton: React.FC<IAddFilmButton> = ({ film, selected }) => {
    const { searchDispatch } = React.useContext(SearchContext);

    const handleClick = () => {
        searchDispatch(
            selected
                ? searchActions.unsetFilmObject()
                : searchActions.setFilmObject(film)
        );
    };

    return (
        <TransparentButton
            aria-label={'Add ' + film.title}
            onClick={handleClick}
        >
            <Arrow
                id={`add_${film.title}_${film.id}`}
                direction={'right'}
                match={'foreground'}
            />
        </TransparentButton>
    );
};

export default AddFilmButton;
