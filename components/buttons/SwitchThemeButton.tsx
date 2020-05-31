import React from 'react';
import BorderedButton from './BorderedButton';
import {
    themeManagerActions,
    useThemeManagerDispatch,
    useThemeManagerState,
} from '../../lib/withThemeManager';

const SwitchThemeButton = () => {
    const themeManagerState = useThemeManagerState();
    const themeManagerDispatch = useThemeManagerDispatch();

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
