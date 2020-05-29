import styled from 'styled-components';

/**
 * a grid for rendering <CharacterItem>
 */
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 0.5em;
    row-gap: 0.5em;
    padding: 1em 2em;
    @media (max-width: 425px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default List;
