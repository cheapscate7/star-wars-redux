import * as React from 'react';
import Head from 'next/head';
import LightTheme from '../themes/Light';
import DarkTheme from '../themes/Dark';
import GlobalStyle from '../components/global';
import { ThemeProvider } from 'styled-components';
import withThemeManager from '../lib/withThemeManager';
import ThemeManagerContext from '../lib/withThemeManagerContext';

const app = ({ Component, pageProps }) => {
    const themeStore = withThemeManager();

    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/icon-16.webp" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <ThemeManagerContext.Provider value={themeStore}>
                <ThemeProvider
                    theme={
                        themeStore.themeManagerState.theme === 'light'
                            ? LightTheme
                            : DarkTheme
                    }
                >
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ThemeManagerContext.Provider>
        </React.Fragment>
    );
};

// Wraps all components in the tree with the data provider
export default app;
