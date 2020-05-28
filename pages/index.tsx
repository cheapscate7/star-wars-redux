import { NextPage } from 'next';
import apolloClient from '../apolloClient';
import Layout from '../components/layout/Layout';
import { withApollo } from '../lib/apollo';
import SelectorListsContainer from '../components/selector_lists/SelectorListsContainer';
import CharacterListContainer from '../components/character_list/CharacterListsContainer';
import withSearch from '../lib/withSearch';
import React from 'react';
import SearchContext from '../lib/withSeachContext';
import CharacterSearchContext from '../lib/withCharacterSeachContext';
import withCharacterSearch from '../lib/withCharacterSearch';
import gql from 'graphql-tag';
import FilmList from '../components/selector_lists/lists/FilmList';
import SpeciesList from '../components/selector_lists/lists/SpeciesList';
import PlanetsList from '../components/selector_lists/lists/PlanetsList';

const ALL_FILMS = gql`
    query getAllFilms {
        allFilms {
            id
            title
        }
    }
`;

interface IHomeProps {
    masterData: IGetFilmsQuery;
}

const Home: NextPage<IHomeProps> = ({ masterData }) => {
    const searchStore = withSearch();
    const characterSearchStore = withCharacterSearch();
    return (
        <>
            <Layout
                title={'Home'}
                description={
                    'Star Wars Database is the best place to go in order to find all the Star Wars information you need'
                }
            >
                <SearchContext.Provider value={searchStore}>
                    {/*SELECTORS*/}
                    <SelectorListsContainer
                        master={'films'}
                        childLists={['species', 'planets']}
                    >
                        <FilmList key={'films'} data={masterData} />
                        <SpeciesList key={'species'} />
                        <PlanetsList key={'planets'} />
                    </SelectorListsContainer>
                    <CharacterSearchContext.Provider
                        value={characterSearchStore}
                    >
                        {/*CHARACTERS*/}
                        <CharacterListContainer />
                    </CharacterSearchContext.Provider>
                </SearchContext.Provider>
            </Layout>
        </>
    );
};

Home.getInitialProps = async (ctx) => {
    const client = await apolloClient(ctx);
    const masterQuery = await client.query<IGetFilmsQuery>({
        query: ALL_FILMS,
    });
    return { masterData: masterQuery.data };
};

export default withApollo({ ssr: true })(Home);
