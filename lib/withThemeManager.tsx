import React, { useReducer } from 'react';

interface IWithThemeManagerState {
    theme: string;
}

const initialState: IWithThemeManagerState = {
    theme: 'light',
};

enum Actions {
    themeToggle,
    themeSet,
}

export const themeManagerActions = {
    toggleTheme() {
        return {
            type: Actions.themeToggle,
        } as const;
    },
    setTheme(theme: string) {
        return {
            type: Actions.themeSet,
            payload: theme,
        };
    },
};
interface IAction {
    type: Actions;
    payload: any;
}
function reducer(
    state: IWithThemeManagerState,
    action: IAction
): IWithThemeManagerState {
    if (action.type === Actions.themeToggle) {
        return {
            theme: state.theme === 'light' ? 'dark' : 'light',
        };
    } else if (action.type === Actions.themeSet) {
        return {
            theme: action.payload,
        };
    } else {
        return state;
    }
}

const ThemeManagerStateContext = React.createContext<
    Partial<IWithThemeManagerState>
>(initialState);
const ThemeManagerDispatchContext = React.createContext(null);

export const ThemeManagerProvider: React.FC = ({ children }) => {
    const [themeManagerState, themeManagerDispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <ThemeManagerStateContext.Provider value={themeManagerState}>
            <ThemeManagerDispatchContext.Provider value={themeManagerDispatch}>
                {children}
            </ThemeManagerDispatchContext.Provider>
        </ThemeManagerStateContext.Provider>
    );
};

export const useThemeManagerState = () => {
    const context = React.useContext(ThemeManagerStateContext);
    if (context === undefined) {
        throw new Error(
            'useThemeManagerState must be used within a ThemeManagerProvider'
        );
    } else {
        return context;
    }
};

export const useThemeManagerDispatch = () => {
    const context = React.useContext(ThemeManagerDispatchContext);
    if (context === undefined) {
        throw new Error(
            'useThemeManagerDispatch must be used within a ThemeManagerProvider'
        );
    } else {
        return context;
    }
};
