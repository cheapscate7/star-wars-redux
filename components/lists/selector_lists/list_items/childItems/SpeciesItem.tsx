import {
    searchActions,
    useSearchDispatch,
} from '../../../../../lib/withSearch';
import Item from './Item';
import React from 'react';

interface SpeciesItemProps extends IListItemProps {
    species: ISpecies;
}

/**
 * renders an individual Species' data in a <SelectorList> component
 * @param species  type: ISpecies     the species data to be rendered
 * @param selected  type: boolean   triggers special css if film is selected
 * @param children  type: DocumentNode
 * @constructor
 */
const SpeciesItem: React.FC<SpeciesItemProps> = ({
    species,
    selected,
    children,
}) => {
    const searchDispatch = useSearchDispatch();

    const handleClick = () => {
        searchDispatch(
            selected
                ? searchActions.unsetSpeciesObject()
                : searchActions.setSpeciesObject(species)
        );
    };
    return (
        <Item className={selected && 'active'}>
            <button onClick={handleClick}>{children}</button>
        </Item>
    );
};

export default SpeciesItem;
