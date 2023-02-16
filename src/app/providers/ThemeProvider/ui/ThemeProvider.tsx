import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const getDefaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<Theme>(getDefaultTheme);

    const defaultProps = useMemo(()=>{
        return ({theme, setTheme})
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;