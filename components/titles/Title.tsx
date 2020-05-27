import React from 'react';
import styled, { css } from 'styled-components';

/**
 * Wrapper to create a fancy title using the "star wars" font
 * @param children
 * @constructor
 */
const Title: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    display: inline-block;
    ${({ theme }) => css`
        border-top: 1px solid ${theme.colors.foreground};
        border-bottom: 1px solid ${theme.colors.foreground};
        color: ${theme.colors.foreground};
        font-family: ${theme.fonts[0]};
    `};
    padding: 0 0.5em;
`;

export default Title;
