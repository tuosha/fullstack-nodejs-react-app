import { Component } from '@storybook/blocks'
import { MainTheme } from '../../../../app/providers/MainThemeProvider'

export const withThemeDecorator = (theme: MainTheme) => (Story: Component) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
)
