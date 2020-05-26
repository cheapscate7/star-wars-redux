import React from 'react';

interface IThemeManagerContext {
    themeManagerState: any;
    themeManagerDispatch: React.Dispatch<any>;
}

const SearchContext = React.createContext<Partial<IThemeManagerContext>>({});

export default SearchContext;
