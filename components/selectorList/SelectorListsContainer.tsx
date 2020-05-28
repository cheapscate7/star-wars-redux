import React from 'react';
import BreadCrumb from './BreadCrumb';
import SelectorList from './SelectorList';
import FilmItem from './listItems/FilmItem';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import SearchContext from '../..//lib/withSeachContext';
import removeUndefined from '../../lib/helpers/arrays';
import SelectorListChildrenContainer from './SelectorListChildrenContainer';

interface ISelectorListsContainerProps {
    masterQuery: Partial<IQueryResult>;
}
/**
 * Receives a master list (films) and controls the visibility of the lists that hold a relation to it
 * @masterQuery type:Partial<IQueryResult> the result from a query on the master list
 * @constructor
 */
const SelectorListsContainer: React.FC<ISelectorListsContainerProps> = ({
    masterQuery,
}) => {
    const { searchState } = React.useContext(SearchContext);
    const { combinedQueryParams } = searchState;

    return (
        <Container>
            <BreadCrumb
                items={removeUndefined([
                    combinedQueryParams.film.title,
                    combinedQueryParams.species.name,
                    combinedQueryParams.planet.name,
                ])}
            />

            <ListGroups>
                {/*FILM LIST*/}
                <SelectorList loading={masterQuery.loading} title={'// Film'}>
                    {masterQuery.data &&
                        masterQuery.data.allFilms.map((film, index) => (
                            <FilmItem
                                key={`${film.title}_${index}`}
                                film={film}
                                selected={
                                    combinedQueryParams.film.id === film.id
                                }
                            >
                                <span>{film.title}</span>
                            </FilmItem>
                        ))}
                </SelectorList>

                {combinedQueryParams.film.id && (
                    <SelectorListChildrenContainer />
                )}
            </ListGroups>
        </Container>
    );
};

export default SelectorListsContainer;
