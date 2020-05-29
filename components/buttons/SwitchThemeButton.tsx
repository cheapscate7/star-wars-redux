import React, { useContext } from 'react';
import ThemeManagerContext from '../../lib/withThemeManagerContext';
import BorderedButton from './BorderedButton';
import { themeManagerActions } from '../../lib/withThemeManager';

const SwitchThemeButton = () => {
    const { themeManagerState, themeManagerDispatch } = useContext(
        ThemeManagerContext
    );

    const { theme } = themeManagerState;

    return (
        <BorderedButton
            onClick={() =>
                themeManagerDispatch(themeManagerActions.toggleTheme())
            }
        >
            Join The {theme === 'light' ? 'Darkside' : 'Lightside'}
        </BorderedButton>
    );
};

export default SwitchThemeButton;
