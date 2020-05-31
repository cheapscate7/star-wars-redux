import { NextPage } from 'next';
import apolloClient from '../apolloClient';
import Layout from '../components/layout/Layout';
import { withApollo } from '../lib/apollo';
import SelectorListsContainer from '../components/lists/selector_lists/SelectorListsContainer';
import CharacterListContainer from '../components/lists/character_list/CharacterListsContainer';
import { SearchProvider } from '../lib/withSearch';
import React from 'react';
import { CharacterSearchProvider } from '../lib/withCharacterSearch';
import FilmList from '../components/lists/selector_lists/lists/FilmList';
import SpeciesList from '../components/lists/selector_lists/lists/SpeciesList';
import PlanetsList from '../components/lists/selector_lists/lists/PlanetsList';
import { ALL_FILMS } from '../lib/queries/starwarsQueries';

interface IHomeProps {
    masterData: IGetFilmsQuery;
}

const Home: NextPage<IHomeProps> = ({ masterData }) => {
    return (
        <>
            <Layout
                title={'Home'}
                description={
                    'Star Wars Database is the best place to go in order to find all the Star Wars information you need'
                }
            >
                <SearchProvider>
                    {/*SELECTORS*/}
                    <SelectorListsContainer
                        master={'films'}
                        childLists={['species', 'planets']}
                    >
                        <FilmList key={'films'} data={masterData} />
                        <SpeciesList key={'species'} />
                        <PlanetsList key={'planets'} />
                    </SelectorListsContainer>
                    <CharacterSearchProvider>
                        {/*CHARACTERS*/}
                        <CharacterListContainer />
                    </CharacterSearchProvider>
                </SearchProvider>
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
