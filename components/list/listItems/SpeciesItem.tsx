import styled, { css } from 'styled-components';
import AddOptionButton from './AddOptionButton';
import { rgba } from 'polished';

interface SpeciesItemProps extends IListItemProps {
    species: ISpecies;
}

const SpeciesItem: React.FC<SpeciesItemProps> = ({
    species,
    clickAction,
    selected,
}) => {
    return (
        <Item>
            <AddOptionButton onClick={() => {}}>
                <img alt={'add'} src={'/plus-sign.svg'} />
            </AddOptionButton>
            {species.name}
        </Item>
    );
};

export default SpeciesItem;

const Item = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5em;
    transition: 0.2s ease;
    ${({ theme }) => css`
        border: 1px solid ${rgba(theme.colors.highlight_1, 0.4)};
        color: ${theme.colors.highlight_1};

        &.active {
            border-right: 0.25em double ${theme.colors.foreground};
        }
         {
            /*This gives the box the bold corners*/
        }
        background: linear-gradient(
                    to right,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 0,
            linear-gradient(
                    to right,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 100%,
            linear-gradient(
                    to left,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 0,
            linear-gradient(
                    to left,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 100%,
            linear-gradient(
                    to bottom,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 0,
            linear-gradient(
                    to bottom,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 0,
            linear-gradient(
                    to top,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                0 100%,
            linear-gradient(
                    to top,
                    ${theme.colors.highlight_1} 2px,
                    transparent 2px
                )
                100% 100%;
        background-repeat: no-repeat;
        background-size: 10px 10px;
        background-color: ${rgba(theme.colors.highlight_1, 0.02)};
        box-shadow: 0 0 7px ${rgba(theme.colors.highlight_1, 0.2)};
    `};

    &:hover {
        padding: 0.7em;
    }

    &:first-child {
        margin-bottom: 0.2em;
    }
    &:last-child {
        margin-top: 0.2em;
    }
    &:not(:first-child):not(:last-child) {
        margin: 0.2em auto;
    }
`;

const AddIcon = styled.object`
    path {
        fill: green;
    }
`;
