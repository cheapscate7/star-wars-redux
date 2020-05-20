import * as React from 'react';
import Head from 'next/head';
import LightTheme from "../themes/Light";
import GlobalStyle from "../components/global";
import { ThemeProvider } from 'styled-components';

const app = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <ThemeProvider theme={LightTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
};

// Wraps all components in the tree with the data provider
export default app;
