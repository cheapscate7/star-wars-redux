import {
    searchActions,
    useSearchDispatch,
} from '../../../../../lib/withSearch';
import Item from './Item';
import React from 'react';

interface PlanetItemProps extends IListItemProps {
    planet: IPlanet;
}

/**
 * renders an individual Planet's data in a <SelectorList> component
 * @param species  type: IPlanet     the planet data to be rendered
 * @param selected  type: boolean   triggers special css if film is selected
 * @param children  type: DocumentNode
 * @constructor
 */
const PlanetItem: React.FC<PlanetItemProps> = ({
    planet,
    selected,
    children,
}) => {
    const searchDispatch = useSearchDispatch();

    const handleClick = () => {
        searchDispatch(
            selected
                ? searchActions.unsetPlanetObject()
                : searchActions.setPlanetObject(planet)
        );
    };
    return (
        <Item className={selected && 'active'}>
            <button onClick={handleClick}>{children}</button>
        </Item>
    );
};

export default PlanetItem;
