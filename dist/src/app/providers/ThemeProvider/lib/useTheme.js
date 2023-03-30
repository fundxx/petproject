import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
import { useContext } from 'react';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return ({ toggleTheme: toggleTheme, theme: theme });
}
