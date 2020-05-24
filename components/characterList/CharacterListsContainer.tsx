import React from 'react';
import Container from '../ListsShared/Container';
import ListGroups from '../ListsShared/ListGroups';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CharacterList from './CharacterList';

const GET_CHARACTERS = gql`
    query($filter: PersonFilter) {
        allPersons(filter: $filter) {
            name
        }
    }
`;

interface ICharacterListContainer {
    homeworldId?: string | undefined;
    filmId?: string | undefined;
    speciesId?: string | undefined;
}

const CharacterListContainer: React.FC<ICharacterListContainer> = ({
    homeworldId,
    filmId,
    speciesId,
}) => {
    const characterQuery = useQuery<
        IFilmChildrenData,
        ICharactersQueryVariables
    >(GET_CHARACTERS, {
        variables: {
            filter: {
                homeworld: { id: homeworldId || null },
                films_every: { id: filmId || null },
                species_every: { id: speciesId || null },
            },
        },
        skip: true,
    });

    return (
        <Container>
            <ListGroups>
                <CharacterList></CharacterList>
            </ListGroups>
        </Container>
    );
};

export default CharacterListContainer;
