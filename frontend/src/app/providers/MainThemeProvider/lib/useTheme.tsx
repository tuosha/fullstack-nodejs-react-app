import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, MainTheme, MainThemeContext } from './MainThemeContext'

interface UseThemeResult {
    changeTheme: () => void
    theme: MainTheme
}

const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(MainThemeContext)
    const changeTheme = () => {
        const newTheme = theme === MainTheme.DARK ? MainTheme.LIGHT : MainTheme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return { theme, changeTheme }
}

export default useTheme
