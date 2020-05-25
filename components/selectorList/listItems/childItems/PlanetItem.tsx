import AddOptionButton from '../AddOptionButton';
import styled, { css } from 'styled-components';
import { searchActions } from '../../../../lib/withSearch';
import Item from './Item';
import React from 'react';
import SearchContext from '../../../../lib/withSeachContext';

interface SpeciesItemProps extends IListItemProps {
    planet: IPlanet;
}

/**
 * renders an individual Planet's data in a <SelectorList> component
 * @param species  type: IPlanet     the planet data to be rendered
 * @param selected  type: boolean   triggers special css if film is selected
 * @param children  type: DocumentNode
 * @constructor
 */
const PlanetItem: React.FC<SpeciesItemProps> = ({
    planet,
    selected,
    children,
}) => {
    const { searchDispatch } = React.useContext(SearchContext);

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
