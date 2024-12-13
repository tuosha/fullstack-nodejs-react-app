import useTheme from '../../../app/providers/MainThemeProvider/lib/useTheme'
import React from 'react'
import { classNames } from '../../helpers/classNames'
import { MainTheme } from '../../../app/providers/MainThemeProvider'
import DarkIcon from '../../assets/icons/theme-dark.svg'
import LightIcon from '../../assets/icons/theme-light.svg'
import BaseButton, { BaseButtonTheme } from '../Buttons/BaseButton/BaseButton'

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
