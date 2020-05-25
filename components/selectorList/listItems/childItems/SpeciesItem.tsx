import AddOptionButton from '../AddOptionButton';
import { searchActions } from '../../../../lib/withSearch';
import Item from './Item';

interface SpeciesItemProps extends IListItemProps {
    species: ISpecies;
}

/**
 * renders an individual Species' data in a <SelectorList> component
 * @param species  type: ISpecies     the species data to be rendered
 * @param selected  type: boolean   triggers special css if film is selected
 * @param clickAction   type: function  action when button is pressed
 * @param children  type: DocumentNode
 * @constructor
 */
const SpeciesItem: React.FC<SpeciesItemProps> = ({
    species,
    clickAction,
    selected,
    children,
}) => {
    return (
        <Item className={selected && 'active'}>
            <AddOptionButton
                onClick={() =>
                    clickAction(searchActions.setSpeciesObject(species))
                }
            >
                <img alt={'add'} src={'/plus-sign.svg'} />
            </AddOptionButton>
            {children}
        </Item>
    );
};

export default SpeciesItem;
