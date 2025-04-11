import { Component } from '@storybook/blocks'
import { MainTheme } from '../../../../app/providers/MainThemeProvider'
import { classNames } from '../../../helpers/classNames/classNames'
import cls from '../../../../app/styles/App.module.scss'

export const withThemeDecorator = (theme: MainTheme) => (Story: Component) => (
    <div className={classNames(cls.app, {}, [theme])}>
        <Story />
    </div>
)
