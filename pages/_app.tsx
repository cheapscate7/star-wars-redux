import * as React from 'react';
import Head from 'next/head';
import LightTheme from '../themes/Light';
import DarkTheme from '../themes/Dark';
import GlobalStyle from '../components/global_styles/global';
import { ThemeProvider } from 'styled-components';
import withThemeManager, { themeManagerActions } from '../lib/withThemeManager';
import ThemeManagerContext from '../lib/withThemeManagerContext';
import { useEffect } from 'react';

const app = ({ Component, pageProps }) => {
    const themeStore = withThemeManager();
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        theme &&
            themeStore.themeManagerDispatch(
                themeManagerActions.setTheme(theme)
            );
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', themeStore.themeManagerState.theme);
    }, [themeStore.themeManagerState.theme]);

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
