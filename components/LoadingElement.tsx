import React from 'react';
import styled, { css } from 'styled-components';

interface ILoadingElementProps {
    loading: boolean;
}

/**
 * Wrapper to show a loading icon if its child is loading
 * @param loading type:boolean
 * @param children
 * @constructor
 */
const LoadingElement: React.FC<ILoadingElementProps> = ({
    loading,
    children,
}) => {
    if (loading) {
        return <Loading />;
    } else {
        return <>{children}</>;
    }
};

export default LoadingElement;

const Loading = styled.div`
    ${({ theme }) => css`
        background-image: url(${theme.iconDecor});
    `};
    background-position: center;
    background-repeat: no-repeat, repeat;
    background-size: contain;
    width: 5em;
    height: 5em;
    margin: auto;
`;
