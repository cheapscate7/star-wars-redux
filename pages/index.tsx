import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import SelectorListsContainer from '../components/selectorList/SelectorListsContainer';
import CharacterListContainer from '../components/characterList/CharacterListsContainer';
import withSearch from '../lib/withSearch';
import React from 'react';
import SearchContext from '../lib/withSeachContext';

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
    const searchStore = withSearch();
    return (
        <>
            <Head>
                <meta name="Description" content="" />
            </Head>
            <Layout>
                <SearchContext.Provider value={searchStore}>
                    <SelectorListsContainer />
                    <CharacterListContainer />
                </SearchContext.Provider>
            </Layout>
        </>
    );
};

export default withApollo({ ssr: true })(Home);
