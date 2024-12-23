import useTheme from '../../app/providers/MainThemeProvider/lib/useTheme'
import { classNames } from '../../shared/helpers/classNames'
import { MainTheme } from '../../app/providers/MainThemeProvider'
import DarkIcon from '../../shared/assets/icons/mainThemes/theme-dark.svg'
import LightIcon from '../../shared/assets/icons/mainThemes/theme-light.svg'
import BaseButton, { BaseButtonTheme } from '../../shared/ui/Buttons/BaseButton/BaseButton'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme()
    return (
        <BaseButton className={classNames('', {}, [className])} theme={BaseButtonTheme.CLEAR} onClick={changeTheme}>
            {theme === MainTheme.DARK ? <DarkIcon /> : <LightIcon />}
        </BaseButton>
    )
}

export default ThemeSwitcher
