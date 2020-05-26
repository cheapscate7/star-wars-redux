/**
 * Taken from Next js Apollo official example
 * url: https://github.com/zeit/next.js/tree/master/examples/with-apollo
 */

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

export default function createApolloClient(initialState, ctx) {
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: 'https://swapi.graph.cool/graphql', // Server URL (must be absolute)
            fetch: fetch,
        }),
        cache: new InMemoryCache().restore(initialState),
    });
}
