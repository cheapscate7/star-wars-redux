import React from 'react';
import BreadCrumb from './BreadCrumb';
import Container from '../shared/Container';
import ListGroups from '../shared/ListGroups';
import { useSearchState } from '../../../lib/withSearch';

/**
 * find a component in the children prop based on a key
 * @param key
 * @param children
 */
const getComponent = (key, children) => {
    return children.filter((comp) => {
        return comp.key === key;
    });
};

interface ISelectorListsContainerProps {
    master: string;
    childLists: string[];
}

/**
 * Receives a master list and controls the visibility of the lists that hold a relation to it
 * @param master    type: string    the key to whichever list in children is the master list
 * @param childLists type: string[]    array of keys for whichever lists in children is the master list
 * @param children
 * @constructor
 */
const SelectorListsContainer: React.FC<ISelectorListsContainerProps> = ({
    master,
    childLists,
    children,
}) => {
    const searchState = useSearchState(); //selected Film, Species, Planet
    const { combinedQueryParams } = searchState;

    return (
        <Container>
            <BreadCrumb />

            <ListGroups>
                {/*Master list*/}
                {getComponent(master, children)}

                {/*Child lists*/}
                {combinedQueryParams.film.id &&
                    childLists.map((listKey) =>
                        getComponent(listKey, children)
                    )}
            </ListGroups>
        </Container>
    );
};

export default SelectorListsContainer;
