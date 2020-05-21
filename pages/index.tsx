import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import ListContainer from '../components/list/ListContainer';

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
    return (
        <>
            <Head>
                <meta name="Description" content="" />
            </Head>
            <Layout>
                <ListContainer />
            </Layout>
        </>
    );
};

export default withApollo({ ssr: true })(Home);
