var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
var getDefaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState(getDefaultTheme), theme = _b[0], setTheme = _b[1];
    var defaultProps = useMemo(function () {
        return ({ theme: theme, setTheme: setTheme });
    }, [theme]);
    return (_jsx(ThemeContext.Provider, __assign({ value: {
            theme: theme,
            setTheme: setTheme
        } }, { children: children })));
};
export default ThemeProvider;
