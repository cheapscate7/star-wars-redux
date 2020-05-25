import React from 'react';

interface ISearchContext {
    searchState: IWithSearchState;
    searchDispatch: React.Dispatch<any>;
}

const SearchContext = React.createContext<Partial<ISearchContext>>({});

export default SearchContext;
