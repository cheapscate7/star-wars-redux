import { useReducer } from 'react';

interface IWithThemeManagerState {
    theme: string;
}

const initialState: IWithThemeManagerState = {
    theme: 'light',
};

enum Actions {
    themeToggle,
}

export const themeManagerActions = {
    toggleTheme() {
        return {
            type: Actions.themeToggle,
        } as const;
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
