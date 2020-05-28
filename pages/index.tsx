import { NextPage } from 'next';
import apolloClient from '../apolloClient';
import Layout from '../components/Layout/Layout';
import { withApollo } from '../lib/apollo';
import SelectorListsContainer from '../components/selectorList/SelectorListsContainer';
import CharacterListContainer from '../components/characterList/CharacterListsContainer';
import withSearch from '../lib/withSearch';
import React from 'react';
import SearchContext from '../lib/withSeachContext';
import CharacterSearchContext from '../lib/withCharacterSeachContext';
import withCharacterSearch from '../lib/withCharacterSearch';
import gql from 'graphql-tag';

const ALL_FILMS = gql`
    query getAllFilms {
        allFilms {
            id
            title
        }
    }
`;

interface IHomeProps {
    masterQuery: Partial<IQueryResult>;
}

const Home: NextPage<IHomeProps> = ({ masterQuery }) => {
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
                    <SelectorListsContainer masterQuery={masterQuery} />
                    <CharacterSearchContext.Provider
                        value={characterSearchStore}
                    >
                        <CharacterListContainer />
                    </CharacterSearchContext.Provider>
                </SearchContext.Provider>
            </Layout>
        </>
    );
};

Home.getInitialProps = async (ctx) => {
    const client = await apolloClient(ctx);
    const masterQuery = await client.query<IAllFilmsQuery>({
        query: ALL_FILMS,
    });
    return { masterQuery };
};

export default withApollo({ ssr: true })(Home);
