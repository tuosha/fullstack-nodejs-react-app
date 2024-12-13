import React, { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, MainTheme, MainThemeContext } from '../lib/MainThemeContext'

const defaultMainTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as MainTheme) || MainTheme.LIGHT

const MainThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<MainTheme>(defaultMainTheme)
    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    )
    return <MainThemeContext.Provider value={defaultProps}>{children}</MainThemeContext.Provider>
}

export default MainThemeProvider
