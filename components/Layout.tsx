import React, { useContext } from 'react';
import Title from './Title';
import styled, { css } from 'styled-components';
import Head from 'next/head';
import ThemeManagerContext from '../lib/withThemeManagerContext';
import { themeManagerActions } from '../lib/withThemeManager';

interface ILayoutProps {
    title: string;
    description: string;
}

/**
 * Controls the layout of the page content in relation to the page header
 * @param title     extend the <Head> title
 * @param description   extend the meta description
 * @param children      page content
 * @constructor
 */
const Layout: React.FC<ILayoutProps> = ({ title, description, children }) => {
    const { themeManagerState, themeManagerDispatch } = useContext(
        ThemeManagerContext
    );

    return (
        <>
            <Head>
                <title>Star Wars Database - {title}</title>
                <meta name="Description" content={description} />
            </Head>
            <PageHeader>
                <Title>
                    <h1>STARDB</h1>
                </Title>
                <SwitchThemeButton
                    onClick={() =>
                        themeManagerDispatch(themeManagerActions.toggleTheme())
                    }
                >
                    Join The{' '}
                    {themeManagerState.theme === 'light'
                        ? 'Darkside'
                        : 'Lightside'}
                </SwitchThemeButton>
            </PageHeader>
            <PageContent>{children}</PageContent>
        </>
    );
};

export default Layout;

const PageHeader = styled.nav`
    color: white;
    padding: 2em 1em;
    border-bottom: 1px solid #777777;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PageContent = styled.main`
    max-width: 73rem;
    margin: auto;
    //this is so the character list goto button doesnt cover up any of the last item of the list
    margin-bottom: 4em;
`;

const SwitchThemeButton = styled.button`
    cursor: pointer;
    padding: 1em 1.5em;
    outline: none;
    transition: 0.2s ease-in-out;
    ${({ theme }) => css`
        font-family: ${theme.fonts[1] || theme.fonts[0]};
        color: ${theme.colors.foreground};
        border: 1px solid ${theme.colors.foreground};
        background-color: ${theme.colors.background};
        &:focus,
        &:hover {
            border: 1px solid ${theme.colors.highlight_1};
        }
    `};
`;
