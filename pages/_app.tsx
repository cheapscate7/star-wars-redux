import React from 'react';
import Head from 'next/head';
import LightTheme from '../themes/Light';
import DarkTheme from '../themes/Dark';
import GlobalStyle from '../components/global_styles/global';
import { ThemeProvider } from 'styled-components';
import {
    themeManagerActions,
    ThemeManagerProvider,
    useThemeManagerDispatch,
    useThemeManagerState,
} from '../lib/withThemeManager';
import { useEffect } from 'react';

const app = ({ Component, pageProps }) => {
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
            <ThemeManagerProvider>
                <AppBody>
                    <Component {...pageProps} />
                </AppBody>
            </ThemeManagerProvider>
        </React.Fragment>
    );
};

// Wraps all components in the tree with the data provider
export default app;

const AppBody: React.FC = ({ children }) => {
    const themeManagerState = useThemeManagerState();
    const themeManagerDispatch = useThemeManagerDispatch();
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            themeManagerDispatch(themeManagerActions.setTheme(theme));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', themeManagerState.theme);
    }, [themeManagerState.theme]);
    return (
        <ThemeProvider
            theme={themeManagerState.theme === 'light' ? LightTheme : DarkTheme}
        >
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
