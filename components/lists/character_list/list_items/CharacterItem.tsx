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
                    <h3 data-testid={'character--children'}>{children}</h3>
                </div>
            ) : (
                <div>
                    <h3 data-testid={'character--name'}>
                        {character.name || ''}
                    </h3>
                    <h4 data-testid={'character--home'}>
                        {(character.homeworld && character.homeworld.name) ||
                            '???'}{' '}
                        <Italics data-testid={'character--birthyear'}>
                            - {character.birthYear || '???BBY'}
                        </Italics>
                    </h4>
                    <p data-testid={'character--species'}>
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
