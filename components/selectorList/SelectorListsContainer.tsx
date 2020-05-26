import React from 'react';
import BreadCrumb from './BreadCrumb';
import SelectorList from './SelectorList';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FilmItem from './listItems/FilmItem';
import LoadingElement from '../LoadingElement';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import SearchContext from '../..//lib/withSeachContext';
import removeUndefined from '../../lib/helpers/arrays';
import dynamic from 'next/dynamic';
import SelectorListChildrenContainer from './SelectorListChildrenContainer';

const ALL_FILMS = gql`
    query getAllFilms {
        allFilms {
            id
            title
        }
    }
`;

/**
 * A grid for placing <SelectorList> items in based on CSS grids
 * one List acts as a master, selecting a value from the master list causes all child lists to be render
 * also has a breadcrumb
 * @constructor
 */
const SelectorListsContainer: React.FC = () => {
    const masterQuery = useQuery<IAllFilmsQuery>(ALL_FILMS);
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
