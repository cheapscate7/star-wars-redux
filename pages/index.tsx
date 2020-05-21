import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ListContainer from '../components/list/ListContainer';

const ALL_FILMS = gql`
    query {
        allFilms {
            id
            title
        }
    }
`;

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
        ALL_FILMS
    );
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
