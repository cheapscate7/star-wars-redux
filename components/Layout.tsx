import React from "react";
import Title from "./Title";
import styled, { css } from 'styled-components';

const Layout: React.FC = (props) => {
  return (
    <>
      <PageHeader>
        <Title><h1>STARDB</h1></Title>
      </PageHeader>
      <PageContent>{props.children}</PageContent>
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
`;
