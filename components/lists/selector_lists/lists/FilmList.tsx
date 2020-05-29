import FilmItem from '../list_items/FilmItem';
import SelectorList from './SelectorList';
import React from 'react';
import SearchContext from '../../../../lib/withSeachContext';

interface IFilmListProps {
    data: IGetFilmsQuery;
}
const FilmList: React.FC<IFilmListProps> = ({ data }) => {
    const { searchState } = React.useContext(SearchContext);
    const { combinedQueryParams } = searchState;

    return (
        <SelectorList loading={false} title={'// Film'}>
            {data &&
                data.allFilms.map((film, index) => (
                    <FilmItem
                        key={`${film.title}_${index}`}
                        film={film}
                        selected={combinedQueryParams.film.id === film.id}
                    >
                        <span>{film.title}</span>
                    </FilmItem>
                ))}
        </SelectorList>
    );
};

export default FilmList;
