import React, { useRef } from 'react';
import ListGroups from '../shared/ListGroups';
import CharacterList from './lists/CharacterList';
import GotoButton from '../../buttons/GotoButton';
import { useSearchState } from '../../../lib/withSearch';

/**
 * Handles rendering lists of characters
 * Must be inside a SearchContext provider
 * @constructor
 */
const CharacterListContainer: React.FC = () => {
    const searchState = useSearchState(); //selected Film, Species, Planet
    const { combinedQueryParams } = searchState;

    //allows a button to scroll to character results
    const characterListRef = useRef(null);

    return (
        <ListGroups>
            {combinedQueryParams.film.id && (
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
