import React from 'react';

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
        return <span>Loading...</span>;
    } else {
        return <>{children}</>;
    }
};

export default LoadingElement;
