import styled, { css } from 'styled-components';
import React from 'react';

interface CharacterItemProps extends IListItemProps {
    character: ICharacter;
}

const CharacterItem: React.FC<CharacterItemProps> = ({
    character,
    selected,
    children,
}) => {
    console.log(character);
    return (
        <Item className={selected && 'active'}>
            {children ? (
                <div>
                    <h3>{children}</h3>
                </div>
            ) : (
                <div>
                    <h2>{character.name}</h2>
                    <h3>
                        {character.homeworld.name}{' '}
                        <Italics>- {character.birthYear || '???BBY'}</Italics>
                    </h3>
                    <p>{character.species[0].name}</p>
                </div>
            )}
        </Item>
    );
};

export default CharacterItem;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 0.5em 1em;
    border-radius: 3px;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
    `};
    > div {
        ${({ theme }) => css`
            border-bottom: 1px solid ${theme.colors.highlight_1_contrast};
            font-family: ${theme.fonts[2] || theme.fonts[0]};
        `};
    }
`;

const Italics = styled.span`
    font-style: italic;
`;
