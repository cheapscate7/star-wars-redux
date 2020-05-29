import React, { useRef } from 'react';
import ListGroups from '../shared/ListGroups';
import CharacterList from './lists/CharacterList';
import SearchContext from '../../../lib/withSeachContext';
import GotoButton from '../../buttons/GotoButton';

/**
 * Handles rendering lists of characters
 * Must be inside a SearchContext provider
 * @constructor
 */
const CharacterListContainer: React.FC = () => {
    const { searchState } = React.useContext(SearchContext); //selected Film, Species, Planet

    //allows a button to scroll to character results
    const characterListRef = useRef(null);

    return (
        <ListGroups>
            {searchState.combinedQueryParams.film.id && (
                <>
                    <CharacterList
                        jumpTo={characterListRef}
                        title={'// Characters'}
                    />
                    <GotoButton
                        label={'characters'}
                        gotoRef={characterListRef}
                    />
                </>
            )}
        </ListGroups>
    );
};

export default CharacterListContainer;
