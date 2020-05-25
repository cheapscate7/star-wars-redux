import AddOptionButton from '../AddOptionButton';
import styled, { css } from 'styled-components';
import { searchActions } from '../../../../lib/withSearch';
import Item from './Item';

interface SpeciesItemProps extends IListItemProps {
    planet: IPlanet;
}

/**
 * renders an individual Planet's data in a <SelectorList> component
 * @param species  type: IPlanet     the planet data to be rendered
 * @param selected  type: boolean   triggers special css if film is selected
 * @param clickAction   type: function  action when button is pressed
 * @param children  type: DocumentNode
 * @constructor
 */
const PlanetItem: React.FC<SpeciesItemProps> = ({
    planet,
    clickAction,
    selected,
    children,
}) => {
    return (
        <Item className={selected && 'active'}>
            <button
                onClick={() =>
                    clickAction(searchActions.setPlanetObject(planet))
                }
            >
                {children}
            </button>
        </Item>
    );
};

export default PlanetItem;
