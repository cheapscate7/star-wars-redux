import React from 'react';

interface ILoadingElementProps {
    loading: boolean;
}

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
