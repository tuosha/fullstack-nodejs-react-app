import { createContext } from 'react'

export enum MainTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface MainThemeProps {
    theme?: MainTheme
    setTheme?: (them: MainTheme) => void
}

export const MainThemeContext = createContext<MainThemeProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
