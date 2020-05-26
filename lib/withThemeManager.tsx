import { useReducer } from 'react';

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

const withThemeManager = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        themeManagerState: state,
        themeManagerDispatch: dispatch,
    };
};

export default withThemeManager;
