import { NextPage } from 'next';
import Head from "next/head";
import { withApollo } from '../lib/apollo';
import gql from 'graphql-tag'
import {useQuery} from "@apollo/react-hooks";

const ALL_FILMS = gql`query {
      allFilms {
        id
        title
      }
    }`;


type HomeProps = {
};

const Home: NextPage<HomeProps> = () => {

    const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_FILMS
  )
    return (
        <>
            <Head>
                <meta
                    name="Description"
                    content=""
                />
            </Head>
            {(data && data.allFilms) && <p>{data.allFilms[0].title}</p>}
        </>
    );
};

export default withApollo({ ssr: true })(Home);