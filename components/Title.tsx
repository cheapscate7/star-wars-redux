import React from "react";
import styled, { css } from 'styled-components';

const Title: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: inline-block;
  ${({theme}) => css`
            border-top: 1px solid ${theme.colors.foreground};
            border-bottom: 1px solid ${theme.colors.foreground};
            color: ${theme.colors.foreground};
            font-family: ${theme.fonts[0]};
        `};
  padding: 0 0.5em;
`;

export default Title;
