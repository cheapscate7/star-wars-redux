import React from 'react';
import { render } from '@testing-library/react';
import LightTheme from '../themes/Light';
import { MockedProvider } from '@apollo/react-testing';
import { ThemeProvider } from 'styled-components';
import { within } from '@testing-library/dom';
import { ThemeManagerProvider } from '../lib/withThemeManager';
import SpeciesList from '../components/lists/selector_lists/lists/SpeciesList';
import * as withSearch from '../lib/withSearch';
import { initialState, SearchProvider } from '../lib/withSearch';
import { GET_SPECIES } from '../lib/queries/starwarsQueries';

const mocks = [
    {
        request: {
            query: GET_SPECIES,
        },
        result: {
            data: {
                allSpecies: [{ id: '1', name: 'Human' }],
            },
        },
    },
];

let scaffold;
let useSearchStateSpy;
let useSearchDispatchSpy;

describe('SpeciesList', () => {
    beforeEach(() => {
        useSearchStateSpy = jest
            .spyOn(withSearch, 'useSearchState')
            .mockImplementation(() => initialState);
        useSearchDispatchSpy = jest
            .spyOn(withSearch, 'useSearchDispatch')
            .mockImplementation(() => () => {});
        scaffold = render(
            <SearchProvider>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <ThemeManagerProvider>
                        <ThemeProvider theme={LightTheme}>
                            <SpeciesList />
                        </ThemeProvider>
                    </ThemeManagerProvider>
                </MockedProvider>
            </SearchProvider>
        );
    });
    test('renders Species list', () => {
        const { getAllByRole, getByRole } = scaffold;
        expect(getByRole('heading', { name: '// Species' })).toBeTruthy();
        expect(useSearchStateSpy).toBeCalled();

        // expect(getAllByRole('listitem').length).toBeGreaterThanOrEqual(1);
        //
        // const { getByText } = within(getByRole('listitem'));
        // expect(getByText('Human')).toBeTruthy();
    });
});
