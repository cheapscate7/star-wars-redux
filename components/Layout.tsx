import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import Head from 'next/head';

interface ILayoutProps {
    title: string;
    description: string;
}

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
`;

const PageContent = styled.main`
    max-width: 73rem;
    margin: auto;
    //this is so the character list goto button doesnt cover up any of the last item of the list
    margin-bottom: 4em;
`;
