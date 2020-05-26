import React from 'react';

interface ICharacterSearchContext {
    characterSearchState: IWithCharacterSearchState;
    characterSearchDispatch: React.Dispatch<any>;
}

const CharacterSearchContext = React.createContext<
    Partial<ICharacterSearchContext>
>({});

export default CharacterSearchContext;
