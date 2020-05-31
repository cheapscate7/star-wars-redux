import React from 'react';
import { render } from '@testing-library/react';
import LightTheme from '../themes/Light';
import { ThemeProvider } from 'styled-components';
import Home from '../pages/index';
import { within } from '@testing-library/dom';
import { ThemeManagerProvider } from '../lib/withThemeManager';

const masterData = {
    allFilms: [{ id: '1', title: 'A New Hope' }],
};

let scaffold;
let active_masterData;

describe('Index with masterData', () => {
    beforeEach(() => {
        active_masterData = masterData;
        scaffold = render(
            <ThemeManagerProvider>
                <ThemeProvider theme={LightTheme}>
                    <Home masterData={active_masterData} />
                </ThemeProvider>
            </ThemeManagerProvider>
        );
    });
    test('renders Layout', () => {
        const { getByText, getByRole } = scaffold;
        expect(getByText('Join The Darkside')).toBeTruthy();
        expect(getByRole('navigation')).toBeTruthy();
        expect(getByRole('main')).toBeTruthy();
        expect(getByRole('heading', { name: 'STARDB' })).toBeTruthy();
    });
    test('renders Film list', () => {
        const { getAllByRole, getByRole } = scaffold;
        expect(getByRole('heading', { name: '// Film' })).toBeTruthy();
        expect(getAllByRole('listitem').length).toBeGreaterThanOrEqual(1);

        const { getByText } = within(getByRole('listitem'));
        expect(getByText('A New Hope')).toBeTruthy();
    });
});
