import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import SelectorListsContainer from '../components/selectorList/SelectorListsContainer';
import CharacterListContainer from '../components/characterList/CharacterListsContainer';

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
    return (
        <>
            <Head>
                <meta name="Description" content="" />
            </Head>
            <Layout>
                <SelectorListsContainer>
                    <CharacterListContainer></CharacterListContainer>
                </SelectorListsContainer>
            </Layout>
        </>
    );
};

export default withApollo({ ssr: true })(Home);
