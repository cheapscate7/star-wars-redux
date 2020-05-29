import React from 'react';
import Title from '../titles/Title';
import Head from 'next/head';
import SwitchThemeButton from '../buttons/SwitchThemeButton';
import PageHeader from './PageHeader';
import PageContent from './PageContent';

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
                <SwitchThemeButton />
            </PageHeader>
            <PageContent>{children}</PageContent>
        </>
    );
};

export default Layout;
