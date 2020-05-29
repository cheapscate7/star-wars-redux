import styled, { css } from 'styled-components';
import React from 'react';
import ListItem from './ListItem';

interface CharacterItemProps extends IListItemProps {
    character: ICharacter;
}

/**
 * Contains a single character
 * Is also used to show if there are no characters
 * @param character type:ICharacter the character to display
 * @param selected  type:boolean    if the item is selected
 * @param children  used to display a message if there are no characters
 * @constructor
 */
const CharacterItem: React.FC<CharacterItemProps> = ({
    character,
    selected,
    children,
}) => {
    return (
        <ListItem className={selected && 'active'}>
            {children ? (
                <div>
                    <h3>{children}</h3>
                </div>
            ) : (
                <div>
                    <h3>{character.name || ''}</h3>
                    <h4>
                        {(character.homeworld && character.homeworld.name) ||
                            '???'}{' '}
                        <Italics>- {character.birthYear || '???BBY'}</Italics>
                    </h4>
                    <p>
                        {character.species.length > 0
                            ? character.species[0].name || ''
                            : '???'}
                    </p>
                </div>
            )}
        </ListItem>
    );
};

export default CharacterItem;

const Italics = styled.span`
    font-style: italic;
`;
