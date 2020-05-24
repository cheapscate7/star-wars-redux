import styled from 'styled-components';
import React from 'react';

interface CharacterItemProps extends IListItemProps {
    character: ICharacter;
}

const CharacterItem: React.FC<CharacterItemProps> = ({
    character,
    selected,
    children,
}) => {
    return <Item className={selected && 'active'}>{character.name}</Item>;
};

const Item = styled.div`
    padding: 1em;
    border-bottom: 1px solid blue;

    &:hover {
        border-bottom: 1px solid yellow;
    }
`;
