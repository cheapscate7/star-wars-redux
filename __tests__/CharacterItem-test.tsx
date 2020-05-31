import React from 'react';
import { render } from '@testing-library/react';
import LightTheme from '../themes/Light';
import { ThemeProvider } from 'styled-components';
import CharacterItem from '../components/lists/character_list/list_items/CharacterItem';
import { within } from '@testing-library/dom';

const character = {
    name: 'dave',
    species: [
        {
            id: '1',
            name: 'bloobian',
        },
    ],
    homeworld: {
        id: '1',
        name: 'bloob',
    },
    birthYear: '111BBY',
};
const null_character = {
    name: '',
    species: [],
    homeworld: null,
    birthYear: '',
};
const not_selected = false;

let scaffold;
let active_character;

describe('CharacterItem with data', () => {
    beforeEach(() => {
        active_character = character;
        scaffold = render(
            <ThemeProvider theme={LightTheme}>
                <CharacterItem
                    character={active_character}
                    selected={not_selected}
                />
            </ThemeProvider>
        );
    });
    test('renders name', () => {
        const { getByTestId, queryByText } = scaffold;
        expect(getByTestId('character--name')).toBeTruthy();
        expect(queryByText('dave')).toBeTruthy();
    });
    test('renders home and birth year', () => {
        const { getByTestId, queryByText } = scaffold;
        expect(getByTestId('character--home')).toBeTruthy();
        expect(queryByText('bloob')).toBeTruthy();
        expect(getByTestId('character--birthyear')).toBeTruthy();
        expect(queryByText('- 111BBY')).toBeTruthy();
    });
    test('renders species', () => {
        const { getByTestId, queryByText } = scaffold;
        expect(getByTestId('character--species')).toBeTruthy();
        expect(queryByText('bloobian')).toBeTruthy();
    });
});

describe('CharacterItem with children', () => {
    beforeEach(() => {
        active_character = null_character;
        scaffold = render(
            <ThemeProvider theme={LightTheme}>
                <CharacterItem character={character} selected={not_selected}>
                    no results
                </CharacterItem>
            </ThemeProvider>
        );
    });
    test("renders 'no results'", () => {
        const { getByTestId } = scaffold;
        expect(getByTestId('character--children')).toBeTruthy();
        const { getByText } = within(getByTestId('character--children'));
        expect(getByText('no results')).toBeTruthy();
    });
});

describe('CharacterItem with null data', () => {
    beforeEach(() => {
        active_character = null_character;
        scaffold = render(
            <ThemeProvider theme={LightTheme}>
                <CharacterItem
                    character={active_character}
                    selected={not_selected}
                />
            </ThemeProvider>
        );
    });
    test('renders no name', () => {
        const { getByTestId } = scaffold;
        expect(getByTestId('character--name')).toBeTruthy();
        const { getByText } = within(getByTestId('character--name'));
        expect(getByText('')).toBeTruthy();
    });
    test('renders no home and birth year', () => {
        const { getByTestId } = scaffold;
        expect(getByTestId('character--home')).toBeTruthy();
        expect(
            within(getByTestId('character--home')).getByText('???')
        ).toBeTruthy();
        expect(getByTestId('character--birthyear')).toBeTruthy();
        expect(
            within(getByTestId('character--birthyear')).getByText('- ???BBY')
        ).toBeTruthy();
    });
    test('renders species', () => {
        const { getByTestId, queryByText } = scaffold;
        expect(getByTestId('character--species')).toBeTruthy();
        const { getByText } = within(getByTestId('character--species'));
        expect(getByText('???')).toBeTruthy();
    });
});
