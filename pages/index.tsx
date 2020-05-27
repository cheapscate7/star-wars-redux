import { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { withApollo } from '../lib/apollo';
import SelectorListsContainer from '../components/selectorList/SelectorListsContainer';
import CharacterListContainer from '../components/characterList/CharacterListsContainer';
import withSearch from '../lib/withSearch';
import React from 'react';
import SearchContext from '../lib/withSeachContext';
import CharacterSearchContext from '../lib/withCharacterSeachContext';
import withCharacterSearch from '../lib/withCharacterSearch';

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
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
                    <SelectorListsContainer />
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

export default withApollo({ ssr: true })(Home);
