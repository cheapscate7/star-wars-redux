import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import SelectorListsContainer from '../components/list/SelectorListsContainer';

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
    return (
        <>
            <Head>
                <meta name="Description" content="" />
            </Head>
            <Layout>
                <SelectorListsContainer />
            </Layout>
        </>
    );
};

export default withApollo({ ssr: true })(Home);
